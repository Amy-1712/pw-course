import { test } from '@playwright/test';

test('Register thông tin', async ({ page }) => {
    await test.step('Truy cập trang https://material.playwrightvn.com/ )', async () => {
        await page.goto('https://material.playwrightvn.com');

    });
    await test.step('click vào “Bài học 1: Register Page (có đủ các element)”', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();

    });
    await test.step('input thông tin các field ', async () => {
        await page.locator("//input [@id='username']").fill("Anh");
        await page.locator("//input [@id='email']").fill("anh@gmail.com");
        await page.locator("//input [@id='female']").check();
        await page.locator("//input [@id='reading']").check();
        await page.locator("//select[@id='interests']").selectOption({ label: 'Art' });
        await page.locator("//select[@id='country']").selectOption({ label: 'United States' });
        await page.locator("//input[@id='dob']").fill("2026-01-01");
        await page.locator("//input[@id='profile']").setInputFiles("data/profile.txt");
        await page.locator("//textarea[@id='bio']").fill('Hello bạn!');
        await page.locator("//button[@type='submit']").click();
       

    });
});