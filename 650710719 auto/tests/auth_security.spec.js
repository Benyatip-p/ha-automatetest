import { test, expect } from '@playwright/test';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test.describe('Authentication and Security (Admin Role)', () => {

 
  test('TC-163: Role validation ต้องอนุญาตให้ Admin เข้าหน้าที่หลังบ้านได้', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('button', { name: 'Login' }).click();
    
    
    await page.getByRole('textbox', { name: 'Username หรือ Email' }).fill('admin@gmail.com');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('password123');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

    await page.goto(`${BASE_URL}admin/dashboard`);
    await expect(page).toHaveURL(/dashboard/i);
    await expect(page.locator('body')).toContainText(/Dashboard/i);
  });

 
  test('TC-164: Role validation ต้องบล็อก Guest จากหน้าที่ protected', async ({ page }) => {
    
    await page.goto(`${BASE_URL}admin/dashboard`);
    
    await expect(page).toHaveURL(/login/i);
  });

});