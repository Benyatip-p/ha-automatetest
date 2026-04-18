import { Page, Locator, expect } from '@playwright/test';

export class NewsPage {
  readonly newsLink: Locator;
  readonly firstNews: Locator;
  readonly heading: Locator;

  constructor(private page: Page) {
    this.newsLink = page.getByRole('link', { name: 'ข่าวสาร' });
    this.firstNews = page.locator('a[href*="/news/"]').first();
    this.heading = page.locator('h1, h2');
  }

  async gotoHome() {
    await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
  }

  async clickNewsMenu() {
    await this.newsLink.click();
  }

  async openFirstNews() {
    await expect(this.firstNews).toBeVisible();
    await this.firstNews.click();
  }

  async expectNewsDetailPage() {
    await expect(this.page).toHaveURL(/\/news\/\d+/);
    await expect(this.heading.first()).toBeVisible();
  }

  async expectNewsDetailVisible() {
    await expect(this.heading.first()).toBeVisible();
  }

  async expectNotRedirectToLogin() {
    await expect(this.page).not.toHaveURL(/login|signin|เข้าสู่ระบบ/i);
  }
}