import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { NewsPage } from '../pages/news.page';

test.describe('TC-101 เพิ่มข่าวใหม่พร้อมรูปประกอบได้สำเร็จ', () => {
  test('เพิ่มข่าวสำเร็จ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const newsPage = new NewsPage(page);

    await loginPage.login('Admin1', '123456');
    await newsPage.goToManageNews();

    await newsPage.createNews(
      'แจ้ง test',
      'images/orange.png',
      'test12',
      '2026-04-08'
    );

    await newsPage.expectNewsCreated('แจ้ง test');
  });
});