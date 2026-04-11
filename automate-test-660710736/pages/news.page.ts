import { Page, Locator, expect } from '@playwright/test';

export class NewsPage {
  readonly page: Page;
  readonly profileMenuButton: Locator;
  readonly manageNewsLink: Locator;
  readonly addNewsButton: Locator;
  readonly titleInput: Locator;
  readonly imageInput: Locator;
  readonly detailInput: Locator;
  readonly publishDateInput: Locator;
  readonly saveNewsButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.profileMenuButton = page.getByRole('button', { name: /สวัสดี,/ });
    this.manageNewsLink = page.getByRole('link', { name: /จัดการข่าวสาร/ });
    this.addNewsButton = page.getByRole('button', { name: 'เพิ่มข่าว' });
    this.titleInput = page.getByRole('textbox', {
      name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส',
    });
    this.imageInput = page.locator('input[type="file"]');
    this.detailInput = page.locator('textarea').first();
    this.publishDateInput = page.locator('input[type="date"]');
    this.saveNewsButton = page.getByRole('button', { name: 'บันทึกข่าว' });
  }

  async goToManageNews() {
    await expect(this.profileMenuButton).toBeVisible({ timeout: 10000 });
    await this.profileMenuButton.click();
    await expect(this.manageNewsLink).toBeVisible();
    await this.manageNewsLink.click();
  }

  async openAddNewsForm() {
    await this.addNewsButton.click();
  }

  async createNews(title: string, imagePath: string, detail: string, publishDate: string) {
    await this.openAddNewsForm();
    await this.titleInput.fill(title);
    await this.imageInput.setInputFiles(imagePath);
    await this.detailInput.fill(detail);
    await this.publishDateInput.fill(publishDate);
    await this.saveNewsButton.click();
  }

  async expectNewsCreated(title: string) {
    await expect(
      this.page.getByRole('heading', { name: title }).first()
    ).toBeVisible();
  }

  async clickDeleteFirstNews() {
    await this.page.getByRole('button', { name: 'ลบ' }).first().click();
  }

  async confirmDeleteNews() {
    await this.page.getByRole('button', { name: 'ลบข่าว' }).click();
  }

  async deleteFirstNews() {
    await this.clickDeleteFirstNews();
    await this.confirmDeleteNews();
  }

  async expectNewsDeleted() {
    await expect(this.page.locator('body')).toBeVisible();
  }
}