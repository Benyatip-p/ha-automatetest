import { Page, Locator } from '@playwright/test';

export class PackagePage {
    readonly page: Page;
    readonly editButton: Locator;
    readonly priceInput: Locator;
    readonly saveButton: Locator;
    readonly errorMessage: Locator;
    readonly cancelButton: Locator;
    readonly priceCell: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editButton = page.getByRole('button', { name: '✏️ แก้ไข' });
        
        this.priceInput = page.getByRole('spinbutton');
        
        this.saveButton = page.getByRole('button', { name: '💾 บันทึก' });
        
        this.errorMessage = page.locator('.error-message'); 

        this.cancelButton = page.getByRole('button', { name: '❌ ยกเลิก' });

        this.priceCell = page.locator('tr').filter({ hasText: '✏️ แก้ไข' }).locator('td').nth(2);
    }

    async updatePrice(price: string) {
        // คลิกปุ่มแก้ไขที่รายการแรก
        await this.editButton.first().click();
        
        // คลิกที่ช่องกรอกก่อน
        await this.priceInput.click();
        await this.priceInput.fill(price);
        
        // กดปุ่มบันทึก
        await this.saveButton.click();
    }

    async cancelEdit(Price: string) {
        await this.editButton.first().click();

        await this.priceInput.click();
        await this.priceInput.fill(Price);

        await this.cancelButton.click();
    }

    async getPriceValue(): Promise<string> {
        // รอให้ cell แสดงผลก่อน แล้วดึงค่า text ออกมา
        await this.priceCell.waitFor({ state: 'visible' });
        return await this.priceCell.innerText();
    }
}