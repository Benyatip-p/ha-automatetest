import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username หรือ Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' });
    this.loginButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
  }

  async goto() {
    await this.page.goto('https://myprojectfitnessvercal.vercel.app/login');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}