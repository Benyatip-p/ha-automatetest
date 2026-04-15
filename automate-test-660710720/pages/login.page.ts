import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginStartButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitLoginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginStartButton = page.getByRole('button', { name: 'Login' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username หรือ Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' });
    this.submitLoginButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
  }

  async goto() {
    await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
  }

  async login(username: string, password: string) {
  await this.goto();

  await this.loginStartButton.click();
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);

  await this.submitLoginButton.click();

  await this.page.waitForLoadState('networkidle');
}
}