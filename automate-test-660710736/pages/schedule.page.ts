import { Page, Locator, expect } from '@playwright/test';

export class SchedulePage {
  readonly page: Page;
  readonly profileMenuButton: Locator;
  readonly manageScheduleLink: Locator;
  readonly classNameInput: Locator;
  readonly classTypeSelect: Locator;
  readonly imageSelect: Locator;
  readonly instructorInput: Locator;
  readonly dayOfWeekSelect: Locator;
  readonly descriptionInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileMenuButton = page.getByRole('button', { name: /สวัสดี,/ });
    this.manageScheduleLink = page.getByRole('link', { name: /จัดการตารางเวลา/ });
    this.classNameInput = page.locator('input[name="name"]');
    this.classTypeSelect = page.locator('select[name="class_type"]');
    this.imageSelect = page.locator('select[name="image_url"]');
    this.instructorInput = page.locator('input[name="instructor_name"]');
    this.dayOfWeekSelect = page.locator('select[name="day_of_week"]');
    this.descriptionInput = page.locator('textarea[name="description"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async goToManageSchedule() {
    await this.profileMenuButton.click();
    await this.manageScheduleLink.click();
  }

  async openAddClassForm() {
    await this.page.getByRole('button', { name: 'เพิ่มคลาส' }).first().click();
  }

  async createClass(
    className: string,
    classType: string,
    imageName: string,
    instructorName: string,
    dayOfWeek: string,
    description: string
  ) {
    await this.openAddClassForm();
    await this.classNameInput.fill(className);
    await this.classTypeSelect.selectOption(classType);
    await this.imageSelect.selectOption(imageName);
    await this.instructorInput.fill(instructorName);
    await this.dayOfWeekSelect.selectOption(dayOfWeek);
    await this.descriptionInput.fill(description);
    await this.saveButton.click();
  }

  async expectClassCreated(className: string) {
    await expect(this.page.getByText(className).first()).toBeVisible();
  }
}