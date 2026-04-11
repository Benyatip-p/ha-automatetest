import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-100 ค้นหา member ด้วย Membership No หรือชื่อที่ถูกต้อง', () => {
  test('ค้นหา member ด้วยชื่อที่ถูกต้อง', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.login('Admin1', '123456');
    await dashboardPage.searchMember('สมชาย');
    await dashboardPage.expectMemberVisible('สมชาย ใจดี');
  });
});