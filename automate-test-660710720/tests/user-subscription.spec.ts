import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('การสมัครสมาชิก', () => {

    test('สมัครสมาชิกครบถ้วนแต่ไม่ตอบแบบสอบถามสุขภาพ', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('test', '123456');

        await page.getByRole('link', { name: 'สมาชิก' }).click();
        await expect(page).toHaveURL(/package/);

        await page.getByRole('link', { name: 'สมาชิก' }).click();
        await page.getByRole('heading', { name: 'นักเรียน/นักศึกษา' }).nth(1).click();
        await page.getByRole('button', { name: 'สมัครเลย' }).nth(3).click();
        await page.locator('input[name="full_name"]').click();
        await page.locator('input[name="full_name"]').fill('เทส เทส');
        await page.locator('select[name="gender"]').selectOption('male');
        await page.locator('input[name="birth_date"]').fill('2026-04-15');
        await page.locator('input[name="phone"]').click();
        await page.locator('input[name="phone"]').fill('0614589988');
        await page.locator('input[name="email"]').click();
        await page.locator('input[name="email"]').fill('test@gmail.com');
        await page.locator('input[name="line_id"]').click();
        await page.locator('input[name="line_id"]').fill('0614589988');
        await page.locator('select[name="user_type"]').selectOption('student');
        await page.locator('input[name="faculty"]').click();
        await page.locator('input[name="faculty"]').fill('วิทยาศาสตร์');
        await page.locator('input[name="major"]').click();
        await page.locator('input[name="major"]').fill('คอม');
        await page.locator('input[name="student_id"]').click();
        await page.locator('input[name="student_id"]').fill('001');
        await page.locator('input[name="department"]').click();
        await page.locator('input[name="department"]').fill('-');
        await page.locator('input[name="emergency_name"]').click();
        await page.locator('input[name="emergency_name"]').fill('-');
        await page.locator('input[name="emergency_phone"]').click();
        await page.locator('input[name="emergency_phone"]').fill('-');
        await page.locator('input[name="known_from"]').click();
        await page.locator('input[name="known_from"]').fill('-');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
        await expect(page.getByRole('alert')).toContainText('สร้าง membership ไม่สำเร็จ');

    });

    test('ดูรายละเอียดแพ็กเกจสมาชิก', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('test', '123456');

        await page.getByRole('link', { name: 'สมาชิก' }).click();
        await expect(page).toHaveURL(/package/);

        await expect(page.locator('#root')).toContainText('รายเดือน');
        await expect(page.locator('#root')).toContainText('4 เดือน');
        await expect(page.locator('#root')).toContainText('บุคลากรในมหาวิทยาลัย');
        await expect(page.locator('#root')).toContainText('บุคคลภายนอก');
    });

    test('สมัครแพ็กเกจสมาชิกสำเร็จ', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('เจเจ', 'member1234');

        await page.getByRole('link', { name: 'สมาชิก' }).click();
        await expect(page).toHaveURL(/package/);

        await page.getByRole('heading', { name: 'นักเรียน/นักศึกษา' }).nth(1).click();
        await page.getByRole('button', { name: 'สมัครเลย' }).nth(3).click();
        await page.locator('input[name="full_name"]').click();
        await page.locator('input[name="full_name"]').fill('เจ เจ');
        await page.locator('select[name="gender"]').selectOption('female');
        await page.locator('input[name="birth_date"]').fill('2026-04-15');
        await page.locator('input[name="phone"]').click();
        await page.locator('input[name="phone"]').fill('0678954789');
        await page.locator('input[name="email"]').click();
        await page.locator('input[name="email"]').fill('jj@gmail.com');
        await page.locator('input[name="line_id"]').click();
        await page.locator('input[name="line_id"]').fill('jj');
        await page.locator('select[name="user_type"]').selectOption('student');
        await page.locator('input[name="faculty"]').click();
        await page.locator('input[name="faculty"]').fill('วิทย์');
        await page.locator('input[name="major"]').click();
        await page.locator('input[name="major"]').fill('คอม');
        await page.locator('input[name="student_id"]').click();
        await page.locator('input[name="student_id"]').fill('002');
        await page.locator('input[name="department"]').click();
        await page.locator('input[name="department"]').fill('-');
        await page.locator('input[name="emergency_name"]').click();
        await page.locator('input[name="emergency_name"]').fill('-');
        await page.locator('input[name="emergency_phone"]').click();
        await page.locator('input[name="emergency_phone"]').fill('-');
        await page.locator('input[name="known_from"]').click();
        await page.locator('input[name="known_from"]').fill('-');
        await page.getByRole('radio').first().check();
        await page.getByRole('radio').nth(2).check();
        await page.getByRole('radio').nth(4).check();
        await page.locator('input[name="parq_3"]').first().check();
        await page.locator('input[name="parq_4"]').first().check();
        await page.locator('input[name="parq_5"]').first().check();
        await page.locator('input[name="parq_6"]').first().check();
        await page.getByRole('checkbox').check();
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
        await page.getByRole('button', { name: 'ยืนยันข้อมูลทั้งหมด' }).click();
        await expect(page.locator('form')).toContainText('สมัครสมาชิกเรียบร้อยแล้ว!');
    });

});