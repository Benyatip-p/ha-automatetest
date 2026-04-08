import { test, expect } from '@playwright/test';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test.describe('Auto Test 5 Cases', () => {

  // TC-002
  test('TC-002: คลิกข่าวแล้วไปหน้ารายละเอียด', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('link', { name: 'ข่าวสาร' }).click();

    const firstNews = page.locator('a').filter({ hasText: /อ่าน|เพิ่มเติม/i }).first();

    if (await firstNews.isVisible()) {
      await firstNews.click();
      await expect(page).not.toHaveURL(BASE_URL);
    } else {
      test.skip();
    }
  });

  // TC-003
  test('TC-003: เมนูนำทางทำงานถูกต้อง', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('link', { name: 'ข่าวสาร' }).click();
    await expect(page).toHaveURL(/news/i);

    await page.getByRole('link', { name: 'ตารางเวลา' }).click();
    await expect(page).toHaveURL(/schedule/i);

    await page.getByRole('link', { name: 'หน้าแรก' }).click();
    await expect(page).toHaveURL(BASE_URL);
  });

  // TC-004
  test('TC-004: ไม่เห็นเมนู Admin', async ({ page }) => {
    await page.goto(BASE_URL);

    await expect(page.locator('text=Admin')).toHaveCount(0);
  });

  // TC-021
  test('TC-021: login สำเร็จ', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('test2@gmail.com');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('abc123456');

    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await expect(page.locator('body')).toContainText(/สวัสดี|logout/i);
  });

  // TC-023
  test('TC-023: login ผิดต้องไม่เข้า', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('Admin1');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123450');

    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await expect(page).toHaveURL(/login/i);
  });

});