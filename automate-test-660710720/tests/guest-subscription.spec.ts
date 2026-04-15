import { test, expect } from '@playwright/test';

test.describe('ผู้ใช้ทั่วไปสมัครสมาชิก', () => {
  test('ไปหน้า Login เมื่อผู้ใช้งานทั่วไปสั่งสมัครแพ็กเกจ', async ({ page }) => {

    await page.goto('/');
    await page.getByRole('link', { name: 'สมาชิก' }).click();
    await page.getByRole('heading', { name: 'บุคลากรในมหาวิทยาลัย' }).first().click();
    await page.getByText('400 บาท').click();
    await page.getByText('ราคาเริ่มต้น / รายเดือน').nth(1).click();
    await page.getByRole('button', { name: 'สมัครเลย' }).nth(1).click();
    await expect(page.locator('h2')).toContainText('เข้าสู่ระบบ');

  });

});