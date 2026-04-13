import { Page, Locator, expect } from '@playwright/test';

export class UserManagementPage {
    readonly page: Page;
    readonly manageMembershipButton: Locator;
    readonly requestTable: Locator;
    readonly searchInput: Locator;
    readonly userRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.manageMembershipButton = page.getByRole('button', { name: 'Manage Memberships' });
        this.requestTable = page.locator('table');
        this.searchInput = page.getByRole('textbox', { name: 'Search by name, username,' });
        this.userRow = page.locator('table tbody tr');
    }

    async openManageMemberships() {
        await this.manageMembershipButton.click();
    }

    async verifyRequestsVisible() {
        // ตรวจสอบว่าตารางหรือรายการคำขอแสดงขึ้นมา
        await expect(this.requestTable).toBeVisible();
    }

    async searchUser(username: string) {
        await this.searchInput.click();
        await this.searchInput.fill(username);
        
        // ระบบค้นหา
        await this.page.waitForLoadState('networkidle');
    }

    async verifySearchResult(expectedUsername: string) {
        await expect(this.userRow.first()).toContainText(expectedUsername);
    }

    async searchByMembershipNo(membershipNo: string) {
        await this.searchInput.fill(membershipNo);
        await this.page.waitForLoadState('networkidle');
    }

    async verifyMembershipInList(membershipNo: string) {
        await expect(this.userRow.first()).toContainText(membershipNo);
    }
}