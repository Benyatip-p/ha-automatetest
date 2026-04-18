import { Page, expect } from '@playwright/test';

export class NavBar {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToNews() {
    await this.page.getByRole('link', { name: 'ข่าวสาร' }).click();
  }

  async goToSchedule() {
    await this.page.getByRole('link', { name: 'ตารางเวลา' }).click();
  }

  async goToHome() {
    await this.page.getByRole('link', { name: 'หน้าแรก' }).click();
  }

  async expectSchedulePage() {
    await expect(this.page).toHaveURL(/schedule/i);
  }
}