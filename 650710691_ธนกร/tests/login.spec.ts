import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test.describe('Login / Logout Flow', () => {

  test('TC-031: Logout สำเร็จ', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('Admin1', '123456');
    await loginPage.expectLoginSuccess();

    await loginPage.logout();
    await loginPage.expectLogoutSuccess();
  });

  test('TC-032: กด Back หลัง Logout แล้วต้องไม่กลับเข้าระบบได้', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('Admin1', '123456');
    await loginPage.expectLoginSuccess();

    await loginPage.logout();
    await loginPage.expectLogoutSuccess();

    await page.goBack();

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.locator('body')).not.toContainText(/สวัสดี/i);
  });

  test('TC-037: เข้าหน้า URL ที่ต้อง login หลัง Logout ต้องถูก redirect', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('Admin1', '123456');
    await loginPage.expectLoginSuccess();

    await loginPage.logout();
    await loginPage.expectLogoutSuccess();

    // เข้า protected page
    await page.goto(`${BASE_URL}profile`);

    // ต้องไม่เข้า (โดนกันไว้)
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.locator('body')).not.toContainText(/สวัสดี/i);
  });

});