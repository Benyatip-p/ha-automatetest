import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('TC-021: login สำเร็จ', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('test2@gmail.com', 'abc123456');
  await loginPage.expectLoginSuccess();
});

test('TC-023: login ผิดต้องไม่เข้า', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginForm();

  await loginPage.fillLogin('Admin1', '123450');
  await loginPage.submit();

  await loginPage.expectStayOnLoginPage();
  await loginPage.expectErrorMessage(); // optional แต่แนะนำ
});