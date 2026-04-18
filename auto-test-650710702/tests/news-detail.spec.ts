import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { NewsPage } from '../pages/news.page';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test('TC-002: คลิกข่าวแล้วไปหน้ารายละเอียด', async ({ page }) => {
  const homePage = new HomePage(page);
  const newsPage = new NewsPage(page);

  await homePage.goto();
  await homePage.clickNewsMenu();

  if (await newsPage.isFirstNewsVisible()) {
    await newsPage.clickFirstNews();
    await expect(page).not.toHaveURL(BASE_URL);
  } 
});