import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('TC-001: หน้าแรกแสดงข่าวสารล่าสุด', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await homePage.expectLatestNewsVisible();
  await homePage.expectNewsItemsExist();
});