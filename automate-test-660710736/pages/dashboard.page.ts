import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly firstViewDropdown: Locator;
  readonly secondViewDropdown: Locator;
  readonly memberTable: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchInput = page.getByRole('textbox', {
      name: 'ค้นหา Membership No หรือ ชื่อ',
    });

    this.firstViewDropdown = page.getByRole('combobox').first();
    this.secondViewDropdown = page.getByRole('combobox').nth(1);

    this.memberTable = page.getByRole('table').first();
  }

  async searchMember(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }

  async expectMemberVisible(memberName: string) {
    await expect(
      this.memberTable.getByRole('cell', { name: new RegExp(memberName) }).first()
    ).toBeVisible();
  }

  async changeFirstView(view: 'daily' | 'monthly' | 'yearly') {
    await this.firstViewDropdown.selectOption(view);
  }

  async changeSecondView(view: 'daily' | 'monthly' | 'yearly') {
    await this.secondViewDropdown.selectOption(view);
  }

  async expectFirstViewValue(view: 'daily' | 'monthly' | 'yearly') {
    await expect(this.firstViewDropdown).toHaveValue(view);
  }

  async expectSecondViewValue(view: 'daily' | 'monthly' | 'yearly') {
    await expect(this.secondViewDropdown).toHaveValue(view);
  }
}