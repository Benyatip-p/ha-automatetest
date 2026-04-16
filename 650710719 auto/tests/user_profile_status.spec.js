import { test, expect } from '@playwright/test';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test.describe('User Profile and Membership Status', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}login`);
    await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('test2@gmail.com');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('abc123456');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  });

  test('TC-171: ผู้ใช้สามารถเข้าถึงหน้าข้อมูลส่วนตัว (Profile) ได้', async ({ page }) => {
    await page.getByRole('link', { name: /ข้อมูลผู้ใช้|Profile/i }).click();
    
    await expect(page).toHaveURL(/profile/i);
    await expect(page.locator('body')).toContainText('test2@gmail.com');
  });

  test('TC-176: ผู้ใช้ดูสถานะสมาชิกและวันหมดอายุของตนเองได้', async ({ page }) => {
    await page.goto(`${BASE_URL}profile`);

    await expect(page.locator('body')).toContainText(/สถานะสมาชิก|หมดอายุ/i);
  });

});