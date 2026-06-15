import { test, expect } from '@playwright/test';

test.beforeEach('', async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
});

test.describe('AUTH - aunthentication', async () => {
    test('@AUTH:Login success', async ({ page }) => {
        await test.step('Nhập vào thông tin username, password đúng', async () => {
           const usernameInput = page.locator("//input[@id='user_login']");
            const pwInput = page.locator("//input[@id='user_pass']");
            const validUsername = "Anhle94";
            const validPw = "12345678";

            await usernameInput.fill(validUsername);
            await pwInput.fill(validPw);
            
            await expect (usernameInput).toHaveValue(validUsername);
            await expect (pwInput).toHaveValue(validPw);
        });

        await test.step('Click button login', async () => {
           const buttonLogin = page.locator("//input[@id='wp-submit']");
           await buttonLogin.click();

        // 1. Chuyển tới trang có url là /wp-admin
           await expect(page).toHaveURL(/.*wp-admin/);  

        // 2. Có heading h1 "Dashboard" hiển thị
        const dashboardHeading = page.locator('h1', { hasText: 'Dashboard' });
        await expect(dashboardHeading).toBeVisible();

        // 3. Có 2 heading h2 là "At a Glance" và "Activity" hiển thị
        const atAGlanceHeading = page.locator('h2', { hasText: 'At a Glance' });
        const activityHeading = page.locator('h2', { hasText: 'Activity' });
        await expect(atAGlanceHeading).toBeVisible();
        await expect(activityHeading).toBeVisible();  

    });

});