import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly loginStartButton: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitLoginButton: Locator;

    constructor(private page: Page) {
        this.loginStartButton = page.getByRole('button', { name: 'Login' });
        this.usernameInput = page.getByRole('textbox', { name: 'Username หรือ Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' });
        this.submitLoginButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
    }

    async goto() {
        await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
    }

    async openLoginForm() {
        await expect(this.loginStartButton).toBeVisible();
        await this.loginStartButton.click();
        await expect(this.usernameInput).toBeVisible();
    }

    async fillLogin(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async submit() {
        await this.submitLoginButton.click();
    }

    async login(username: string, password: string) {
        await this.goto();
        await this.openLoginForm();
        await this.fillLogin(username, password);
        await this.submit();
        await this.page.waitForLoadState('networkidle');
    }

    async expectLoginSuccess() {
        await expect(this.page.locator('body')).toContainText(/สวัสดี|logout/i);
    }

    async expectLoginFail() {
        await expect(this.usernameInput).toBeVisible();
    }

    async expectStayOnLoginPage() {
        await expect(this.page).toHaveURL(/login/i);
    }

    async expectErrorMessage() {
        await expect(this.page.locator('body')).toContainText(/invalid|ไม่ถูกต้อง/i);
    }
}