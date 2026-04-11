import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { NewsPage } from '../pages/news.page';

test.describe('TC-106 ลบข่าวโดยยืนยันการลบได้สำเร็จ', () => {
  test('ลบข่าวสำเร็จ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const newsPage = new NewsPage(page);

    await loginPage.login('Admin1', '123456');
    await newsPage.goToManageNews();

    await newsPage.deleteFirstNews();
    await newsPage.expectNewsDeleted();
  });
});