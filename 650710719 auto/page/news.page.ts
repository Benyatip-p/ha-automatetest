import { Page, Locator } from '@playwright/test';

export class NewsPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly contentInput: Locator;
  readonly typeSelect: Locator; // เพิ่มตัวแปรสำหรับ combobox
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByLabel(/หัวข้อ/i);
    this.contentInput = page.getByLabel(/เนื้อหา/i);
    this.typeSelect = page.getByRole('combobox');
    this.saveButton = page.getByRole('button', { name: /บันทึก/i });
  }

  async fillNewsForm(title: string, content: string, typeLabel: string) {
    await this.titleInput.fill(title);
    await this.contentInput.fill(content);
    await this.typeSelect.selectOption({ label: typeLabel });
    await this.saveButton.click();
  }
}