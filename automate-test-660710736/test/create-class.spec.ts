import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SchedulePage } from '../pages/schedule.page';

test.describe('TC-111 เพิ่มคลาสใหม่ด้วยข้อมูลถูกต้องสำเร็จ', () => {
  test('เพิ่มคลาสสำเร็จ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const schedulePage = new SchedulePage(page);

    await loginPage.login('Admin1', '123456');
    await schedulePage.goToManageSchedule();

    await schedulePage.createClass(
      'pelatis',
      'Flexibility',
      'flexibility.jpg',
      'turr',
      'Friday',
      'class pelatis w//'
    );

    await schedulePage.expectClassCreated('pelatis');
  });
});