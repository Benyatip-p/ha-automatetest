import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

async function login(page: Page) {
  await page.goto(BASE_URL);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('test');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
}

async function logout(page: Page) {
  await page.getByRole('button', { name: /สวัสดี, test/i }).click();
  await page.getByRole('button', { name: /ออกจากระบบ/i }).click();
}

test('TC-031: Logout สำเร็จ', async ({ page }) => {
  await login(page);
  await logout(page);
  await expect(page).toHaveURL(/login|signin|เข้าสู่ระบบ/i);
});

test('TC-032: กด Back หลัง Logout แล้วต้องไม่กลับเข้าระบบได้', async ({ page }) => {
  await login(page);
  await logout(page);
  await page.goBack();
  await expect(page).toHaveURL(/login|signin|เข้าสู่ระบบ/i);
});

test('TC-037: เข้าหน้า URL ที่ต้อง login หลัง Logout ต้องถูก redirect', async ({ page }) => {
  await login(page);
  await logout(page);
  await page.goto(`${BASE_URL}profile`);
  await expect(page).toHaveURL(/login|signin|เข้าสู่ระบบ/i);
});

test('TC-044: คลิกข่าวแล้วเปิดหน้ารายละเอียดได้', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole('link', { name: 'ข่าวสาร' }).click();

  const firstNews = page.locator('a[href*="/news/"]').first();
  await expect(firstNews).toBeVisible();
  await firstNews.click();

  await expect(page).toHaveURL(/\/news\/\d+/);
  await expect(page.locator('h1, h2')).toBeVisible();
});

test('TC-050: ผู้ใช้ที่ยังไม่ login สามารถดูข่าว public ได้', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole('link', { name: 'ข่าวสาร' }).click();

  const firstNews = page.locator('a[href*="/news/"]').first();
  await expect(firstNews).toBeVisible();
  await firstNews.click();

  await expect(page).not.toHaveURL(/login|signin|เข้าสู่ระบบ/i);
  await expect(page.locator('h1, h2')).toBeVisible();
});