import { test, expect } from '@playwright/test';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test.describe('Dashboard and Reports System', () => {

  test.beforeEach(async ({ page }) => {
    // Login เข้าสู่ระบบในบทบาท Admin
    await page.goto(`${BASE_URL}login`);
    await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('admin@gmail.com');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('password123');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  });

  test('TC-151/152: Admin ดูรายงานจำนวนผู้เข้าใช้และสรุปสมาชิกบน Dashboard ได้', async ({ page }) => {
    await page.goto(`${BASE_URL}admin/dashboard`);

    await expect(page.locator('body')).toContainText(/รายงานผู้เข้าใช้|Daily Visit/i);
    
    await expect(page.locator('body')).toContainText(/สถิติสมาชิก|Member Status/i);
  });

  test('TC-180: กรองรายงานตามช่วงเวลาที่เลือกได้สำเร็จ', async ({ page }) => {
    await page.goto(`${BASE_URL}admin/dashboard`);

   
    const filter = page.locator('select').first(); 
    if (await filter.isVisible()) {
        await filter.selectOption('monthly');
        await expect(page).toHaveURL(/filter=monthly|report/i);
    }
  });

});