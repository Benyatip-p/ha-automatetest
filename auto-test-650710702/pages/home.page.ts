import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly adminMenu: Locator;
  readonly latestNewsSection: Locator;
  readonly newsItems: Locator;

  constructor(private page: Page) {
    this.adminMenu = this.page.locator('text=Admin');
    this.latestNewsSection = this.page.getByText(/ข่าวสารล่าสุด/i);
    this.newsItems = this.page.locator('a').filter({ hasText: /อ่าน|เพิ่มเติม/i });
  }

  async goto() {
    await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
  }

  async clickNewsMenu() {
    await this.page.getByRole('link', { name: 'ข่าวสาร' }).click();
  }

  async clickHomeMenu() {
    await this.page.getByRole('link', { name: 'หน้าแรก' }).click();
  }

  async clickScheduleMenu() {
    await this.page.getByRole('link', { name: 'ตารางเวลา' }).click();
  }

  async clickPackageMenu() {
    await this.page.getByRole('link', { name: 'สมาชิก' }).click();
  }

  async clickNewsSection() {
    await this.page
      .locator('div')
      .filter({
        hasText:
          '📰 ข่าวสารล่าสุดอัปเดตเรื่องราวใหม่ๆ สำหรับคุณทั้งหมดประกาศกิจกรรมโปรโมชั่นใหม่ท',
      })
      .nth(2)
      .click();
  }

  async clickScheduleSection() {
    await this.page
      .getByText(
        '📅 ตารางเวลาอัปเดตคลาสล่าสุดของสัปดาห์นี้วัน / เวลา07:0017:0017:4518:0019:'
      )
      .click();
  }

  async clickMemberSection() {
    await this.page
      .getByText(
        '💳 สมาชิกสำหรับทุกคนเลือกแพ็กเกจที่เหมาะกับคุณรายเดือนนักเรียน/นักศึกษา-ราคาเริ่'
      )
      .click();
  }

  async expectNewsUrl() {
    await expect(this.page).toHaveURL(/news/i);
  }

  async expectScheduleUrl() {
    await expect(this.page).toHaveURL(/schedule/i);
  }

  async expectPackageUrl() {
    await expect(this.page).toHaveURL(/package/i);
  }

  async expectAdminMenuHidden() {
    await expect(this.adminMenu).toHaveCount(0);
  }

  async expectLatestNewsVisible() {
    await expect(this.latestNewsSection).toBeVisible();
  }

  async expectNewsItemsExist() {
    await expect(this.newsItems.first()).toBeVisible();
  }
}