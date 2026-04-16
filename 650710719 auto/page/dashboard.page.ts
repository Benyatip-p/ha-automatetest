import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly userSearchInput: Locator;
  readonly reportSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userSearchInput = page.getByPlaceholder(/ค้นหา/i);
    this.reportSection = page.locator('body'); 
  }

  async searchUser(id: string) {
    await this.userSearchInput.fill(id);
    await this.page.keyboard.press('Enter');
  }
}