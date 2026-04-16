import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login.page'; // import หน้า Login มาใช้ด้วย
import { NewsPage } from '../page/news.page';

const BASE_URL = 'https://myprojectfitnessvercal.vercel.app/';

test.describe('News Management System', () => {

  test('TC-179: เพิ่มข่าวสารใหม่สำเร็จด้วยข้อมูลครบถ้วน', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const newsPage = new NewsPage(page);

    await loginPage.goto();
    await loginPage.login('admin@gmail.com', 'password123');

    await page.goto(`${BASE_URL}admin/news/add`);

  
    await newsPage.fillNewsForm(
      'สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ',
      'แจ้งสมาชิกทุกท่าน! ช่วงเทศกาลสงกรานต์ นี้เราเปิดปกติ...',
      'ทั่วไป' 
    );

    await expect(page).toHaveURL(/news/i);
    await expect(page.locator('body')).toContainText('สงกรานต์นี้ SU.ED FITNESS');
  });

});