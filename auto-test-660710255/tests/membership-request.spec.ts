import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { UserManagementPage } from '../pages/userManagement.page';

test('TC-131 ตรวจสอบรายการคำขอสมัครสมาชิกในหน้า Manage Memberships', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const userPage = new UserManagementPage(page);

    // 1. Login
    await loginPage.login('Admin1', '123456');

    // 2. ไปที่หน้าจัดการผู้ใช้
    await dashboardPage.goToManageUser();

    // 3. คลิก Manage Memberships
    await userPage.openManageMemberships();

    // 4. ตรวจสอบการแสดงผลรายการ
    await userPage.verifyRequestsVisible();
});

test('TC-134 ค้นหาผู้ใช้ตาม Username ได้', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const userPage = new UserManagementPage(page);

    const searchTerm = 'testQR';

    // 1. เข้าสู่ระบบ
    await loginPage.login('Admin1', '123456');

    // 2. ไปหน้าจัดการผู้ใช้ 
    await dashboardPage.goToManageUser();

    // 3. ทำการค้นหาในช่อง Search
    await userPage.searchUser(searchTerm);

    // 4. ตรวจสอบว่าผลลัพธ์แสดง User ที่ถูกต้อง
    await userPage.verifySearchResult(searchTerm);

});

test('TC-147 ค้นหาผู้ใช้ตาม Membership No ได้', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const userPage = new UserManagementPage(page);

    const targetMembershipNo = 'M2026-0021';

    // 1. Login
    await loginPage.login('Admin1', '123456');
    
    // รอให้หน้า Dashboard โหลดและกดไปหน้าจัดการผู้ใช้
    await page.waitForURL('**/dashboard');
    await dashboardPage.goToManageUser();

    // 2. ค้นหาด้วย Membership No
    await userPage.searchByMembershipNo(targetMembershipNo);

    // 3. ตรวจสอบผลลัพธ์ว่าเจอรายการที่ตรงกัน
    await userPage.verifyMembershipInList(targetMembershipNo);
});