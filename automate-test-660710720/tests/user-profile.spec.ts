import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('ข้อมูลส่วนตัวผู้ใช้', () => {
    test('ดูข้อมูลส่วนตัวผู้ใช้', async ({ page }) => {
        await page.goto('/');

        const loginPage = new LoginPage(page);
        await loginPage.login('test', '123456');

        await page.getByRole('button', { name: 'สวัสดี, test' }).click();
        await page.getByRole('link', { name: ' ข้อมูลผู้ใช้' }).click();
        await expect(page.locator('h2')).toContainText('My Profile');
        await page.getByRole('heading', { name: 'Test test' }).click();
        await expect(page.locator('h4')).toContainText('Test test');
        await expect(page.locator('#root')).toContainText('Email');
        await expect(page.locator('#root')).toContainText('Phone');
        await expect(page.locator('#root')).toContainText('Role');
    });

});