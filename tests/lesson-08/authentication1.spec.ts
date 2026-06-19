import { test, expect } from '@playwright/test';



test.describe('AUTH - authentication', async () => {
    test.beforeEach('', async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });
    test('@AUTH_001:Login fail', async ({ page }) => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        });
        //B1: Nhập vào thông tin username, password bị sai
        await test.step('Nhập vào thông tin username, password bị sai', async () => {
            const usernameInput = page.locator("//input[@id='user_login']");
            const pwInput = page.locator("//input[@id='user_pass']");
            const inValidUsername = "Anhle";
            const inValidPw = "123456";

            await usernameInput.fill(inValidUsername);
            await pwInput.fill(inValidPw);

            await expect(usernameInput).toHaveValue(inValidUsername);
            await expect(pwInput).toHaveValue(inValidPw);

        });

        //B2: Click button login
        await test.step('Click button login', async () => {
            const errorMessageText = "Error: The username <username> is not registered on this site. If you are unsure of your username, try your email address instead.";
            const errorMessage = page.locator('#login_error');

            await page.locator("//input[@id='wp-submit']").click();
            await expect(errorMessage).toBeVisible();
            await expect(errorMessage).toContainText(errorMessageText);
        });

    });

});