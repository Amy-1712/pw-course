import { test } from '@playwright/test';

test('Add sản phẩm vào cart', async ({page}) => {
    await test.step('Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com');

    });
    await test.step('click vào “Bài học 2: Product page”', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });
    await test.step('add sản phẩm', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
        await page.locator("//button[@data-product-id='2']").dblclick();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='3']").click();
       
    });
});
