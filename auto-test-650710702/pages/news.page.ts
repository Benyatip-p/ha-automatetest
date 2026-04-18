import { Page, Locator } from '@playwright/test';

export class NewsPage {
  readonly firstNewsReadMoreButton: Locator;

  constructor(private page: Page) {
    this.firstNewsReadMoreButton = this.page
      .locator('a')
      .filter({ hasText: /อ่าน|เพิ่มเติม/i })
      .first();
  }

  async clickFirstNews() {
    await this.firstNewsReadMoreButton.click();
  }

  async isFirstNewsVisible() {
    return await this.firstNewsReadMoreButton.isVisible();
  }
}