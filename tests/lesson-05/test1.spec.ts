import { test } from '@playwright/test';
import { RegisterPage } from '../lesson-05/RegisterPage';

test('Resgister test', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const username = 'anhle_k23';
    const email = 'anhle@gmail.com';
    const dob = '2026-02-02';
    const filePath = 'data/profile.txt';
    const bio = ' hello';

    await registerPage.navigate();
    await registerPage.clickToRegisterPage();
    await registerPage.register(username, email, bio, dob, filePath);
    await registerPage.verifyResigteredData(username, email);

});

