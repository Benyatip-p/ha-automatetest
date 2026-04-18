import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('TC-003: เมนูนำทางจากหน้าแรกไปยังหน้าต่าง ๆ ทำงานถูกต้อง', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  // News
  await homePage.clickNewsMenu();
  await expect(page).toHaveURL(/news/i);

  // Schedule
  await homePage.clickScheduleMenu();
  await expect(page).toHaveURL(/schedule/i);

  // package
  await homePage.clickPackageMenu();
  await expect(page).toHaveURL(/package/i);

});

//TC-004

test('TC: Navigation menu works', async ({ page }) => {
  await page.goto('https://myprojectfitnessvercal.vercel.app/');

  await page.getByRole('link', { name: 'หน้าแรก' }).click();
  await expect(page).toHaveURL(/home|\/$/);

  await page.getByRole('link', { name: 'ข่าวสาร' }).click();
  await expect(page).toHaveURL(/news/i);

  await page.getByRole('link', { name: 'ตารางเวลา' }).click();
  await expect(page).toHaveURL(/schedule/i);

  await page.getByRole('link', { name: 'สมาชิก' }).click();
  await expect(page).toHaveURL(/package/i);
});