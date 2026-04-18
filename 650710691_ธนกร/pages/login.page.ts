import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly loginButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(private page: Page) {
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username หรือ Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' });
    this.submitButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
  }

  async goto() {
    await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
  }

  async openLoginForm() {
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
    await expect(this.usernameInput).toBeVisible();
  }

  async fillLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.submitButton.click();
  }

  async login(username: string, password: string) {
    await this.goto();
    await this.openLoginForm();
    await this.fillLogin(username, password);
    await this.submitLogin();
    await this.page.waitForLoadState('networkidle');
  }

  async expectLoginSuccess() {
    await expect(this.page.locator('body')).toContainText(/สวัสดี|logout/i);
  }

  async expectLoginFail() {
    await expect(this.page.locator('body')).toContainText(/invalid|error/i);
  }

  async openUserMenu() {
    await this.page.getByRole('button', { name: /สวัสดี,\s*Admin1/i }).click();
  }

  async clickLogout() {
    await this.page.getByRole('button', { name: /ออกจากระบบ/i }).click();
  }

  async logout() {
    await this.openUserMenu();
    await this.clickLogout();
  }

  async expectLogoutSuccess() {
    await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
  }

  async expectRedirectToLogin() {
  await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
}
}