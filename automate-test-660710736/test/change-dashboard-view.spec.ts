import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('TC-092 เปลี่ยนมุมมองรายวัน/รายสัปดาห์/รายเดือน', () => {
  test('เปลี่ยนมุมมองแล้วค่าของ dropdown เปลี่ยนตามจริง', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.login('Admin1', '123456');

    await dashboardPage.changeFirstView('yearly');
    await dashboardPage.expectFirstViewValue('yearly');

    await dashboardPage.changeFirstView('daily');
    await dashboardPage.expectFirstViewValue('daily');

    await dashboardPage.changeSecondView('yearly');
    await dashboardPage.expectSecondViewValue('yearly');

    await dashboardPage.changeSecondView('monthly');
    await dashboardPage.expectSecondViewValue('monthly');

    await dashboardPage.changeFirstView('monthly');
    await dashboardPage.expectFirstViewValue('monthly');
  });
});