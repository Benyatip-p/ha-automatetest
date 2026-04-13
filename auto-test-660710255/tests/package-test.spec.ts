import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { PackagePage } from '../pages/package.page';

test('TC-126 แก้ไขราคาแพ็กเกจเป็นรูปแบบที่ไม่ถูกต้อง', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const packagePage = new PackagePage(page);

    // 1. Login เข้าระบบ
    await loginPage.login('Admin1', '123456');

    // 2. ไปที่หน้าจัดการแพ็กเกจผ่านเมนูโปรไฟล์
    await dashboardPage.goToManagePackage();

    // 3. แก้ไขราคาแพ็กเกจ
    await packagePage.updatePrice('xxx');

    // 4. ตรวจสอบว่าระบบแจ้งเตือน Error 
    await expect(packagePage.errorMessage).toBeVisible();
    await expect(packagePage.errorMessage).toContainText('กรุณากรอกตัวเลขเท่านั้น');
});


test('TC-128 ยกเลิกการแก้ไขแพ็กเกจ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const packagePage = new PackagePage(page);

    await loginPage.login('Admin1', '123456');
    await dashboardPage.goToManagePackage();

    // 1. เก็บค่าราคาเดิม (สมมติว่าเป็น '100')
    const originalPrice = await packagePage.getPriceValue();

    // 2. จำลองการแก้ไขแต่กดยกเลิก
    await packagePage.cancelEdit('1500');

    // 3. Assertion: ตรวจสอบว่าค่ายังเป็นค่าเดิม
    const currentPrice = await packagePage.getPriceValue();
    expect(currentPrice).toBe(originalPrice);
    
    // 4. ตรวจสอบว่า Modal แก้ไขปิดไปแล้วจริงๆ (Spinbutton ต้องไม่โชว์)
    await expect(packagePage.priceInput).not.toBeVisible();
});