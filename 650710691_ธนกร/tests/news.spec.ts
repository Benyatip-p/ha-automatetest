import { test } from '@playwright/test';
import { NewsPage } from '../pages/news.page';

test('TC-044: คลิกข่าวแล้วเปิดหน้ารายละเอียดได้', async ({ page }) => {
  const newsPage = new NewsPage(page);

  await newsPage.gotoHome();
  await newsPage.clickNewsMenu();

  await newsPage.openFirstNews();
  await newsPage.expectNewsDetailPage();
});

test('TC-050: ผู้ใช้ที่ยังไม่ login สามารถดูข่าว public ได้', async ({ page }) => {
  const newsPage = new NewsPage(page);

  await newsPage.gotoHome();
  await newsPage.clickNewsMenu();
  await newsPage.openFirstNews();

  await newsPage.expectNotRedirectToLogin();
  await newsPage.expectNewsDetailVisible();
});