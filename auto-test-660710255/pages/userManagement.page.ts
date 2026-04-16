import { Page, Locator, expect } from '@playwright/test';

export class UserManagementPage {
    readonly page: Page;
    readonly manageMembershipButton: Locator;
    readonly requestTable: Locator;
    readonly searchInput: Locator;
    readonly userRow: Locator;
    readonly firstApproveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.manageMembershipButton = page.getByRole('button', { name: 'Manage Memberships' });
        this.requestTable = page.locator('table');
        this.searchInput = page.getByRole('textbox', { name: 'Search by name, username,' });
        this.userRow = page.locator('table tbody tr');
        
        this.firstApproveButton = page.getByRole('button', { name: 'Approve' }).first();
    }

    async openManageMemberships() {
        await this.manageMembershipButton.click();
        await expect(this.requestTable).toBeVisible();
    }

    async verifyRequestsVisible() {
        await expect(this.requestTable).toBeVisible();
    }

    async approveFirstRequest() {
        await this.firstApproveButton.waitFor({ state: 'visible' });
        await this.firstApproveButton.click();
    }

    async searchUser(username: string) {
        await this.searchInput.fill(username);
        await this.page.waitForLoadState('networkidle');
    }

    async verifySearchResult(expectedUsername: string) {
        await expect(this.userRow.first()).toContainText(expectedUsername);
    }
}