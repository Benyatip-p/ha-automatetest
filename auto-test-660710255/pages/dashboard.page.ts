import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly profileButton: Locator;
    readonly managePackageLink: Locator;
    readonly manageUserLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileButton = page.getByRole('button', { name: 'สวัสดี, Admin1' });
        this.managePackageLink = page.getByRole('link', { name: ' จัดการแพ็กเกจ' });
        this.manageUserLink = page.getByRole('link', { name: ' จัดการผู้ใช้' });
    }

    async goToManagePackage() {
        await this.profileButton.click();
        await this.managePackageLink.click();
    }

    async goToManageUser() {
        await this.profileButton.click();
        await this.manageUserLink.click();
    }
}