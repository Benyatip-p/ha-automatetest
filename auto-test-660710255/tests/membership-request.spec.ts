import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { UserManagementPage } from '../pages/userManagement.page';

test.describe('User Management System', () => {
    
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('Admin1', '123456');
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.goToManageUser();
    });

    test('TC-131 ตรวจสอบรายการคำขอสมัครสมาชิกในหน้า Manage Memberships', async ({ page }) => {
        const userPage = new UserManagementPage(page);
        await userPage.openManageMemberships();
        await userPage.verifyRequestsVisible();
    });

    test('TC-134 ค้นหาผู้ใช้ตาม Username ได้', async ({ page }) => {
        const userPage = new UserManagementPage(page);
        const searchTerm = 'testQR';
        await userPage.searchUser(searchTerm);
        await userPage.verifySearchResult(searchTerm);
    });

    test('TC-132 อนุมัติคำขอสมัครสมาชิกรายการแรกสำเร็จ', async ({ page }) => {
        const userPage = new UserManagementPage(page);

        await userPage.openManageMemberships();
        await userPage.approveFirstRequest();

    });
});