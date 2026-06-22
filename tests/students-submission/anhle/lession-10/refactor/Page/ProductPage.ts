import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    page: Page;
    buttonAddsp1: Locator;
    buttonAddsp2: Locator;
    buttonAddsp3: Locator;
    linkProductPage: Locator;
    cartProduct1Quantity: Locator;
    cartProduct2Quantity: Locator;
    cartProduct3Quantity: Locator;
    totalPriceText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonAddsp1 = page.locator("//button[@data-product-id='1']");
        this.buttonAddsp2 = page.locator("//button[@data-product-id='2']");
        this.buttonAddsp3 = page.locator("//button[@data-product-id='3']");
        this.linkProductPage = page.locator("//a[@href='02-xpath-product-page.html']");
        this.cartProduct1Quantity = page.locator('//tr[contains(., "Sản phẩm 1")]//td[@class="product-quantity"] | //tr[contains(., "Product 1")]/td[3]');
        this.cartProduct2Quantity = page.locator('//tr[contains(., "Sản phẩm 2")]//td[@class="product-quantity"] | //tr[contains(., "Product 2")]/td[3]');
        this.cartProduct3Quantity = page.locator('//tr[contains(., "Sản phẩm 3")]//td[@class="product-quantity"] | //tr[contains(., "Product 3")]/td[3]');
        this.totalPriceText = page.locator('#total-price, .total-price');
    }

    async navigate() {
        this.page.goto('https://material.playwrightvn.com');
    }

    async clickToProductPage() {
        await this.linkProductPage.click();
    }

    async addProductTimes(productButton: Locator, quantity: number) {
        for (let i = 0; i < quantity; i++) {
            await productButton.click();
        }
    }
    async addProduct(q1: number, q2: number, q3: number) {
        await this.addProductTimes(this.buttonAddsp1, q1);
        await this.addProductTimes(this.buttonAddsp2, q2);
        await this.addProductTimes(this.buttonAddsp3, q3);

    }
    async checkSoLuongSP(expectedQ1: number, expectedQ2: number, expectedQ3: number) {
        if (expectedQ1 > 0) {
            await expect(this.cartProduct1Quantity).toHaveText(expectedQ1.toString());
        }
        if (expectedQ2 > 0) {
            await expect(this.cartProduct2Quantity).toHaveText(expectedQ2.toString());
        }
        if (expectedQ3 > 0) {
            await expect(this.cartProduct3Quantity).toHaveText(expectedQ3.toString());
        }
    }

}
    