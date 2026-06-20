import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    page: Page;
    linkRegisterPage: Locator;
    usernameInput: Locator;
    emailInput: Locator;
    genderInput: Locator;
    hobbiesInput: Locator;
    interestsInput: Locator;
    dateOfBirthInput: Locator;
    profileInput: Locator;
    bioInput: Locator;
    buttonSubmit: Locator;
    resultTableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkRegisterPage = page.locator("//a[@href='01-xpath-register-page.html']");
        this.usernameInput = page.locator("//input[@id='username']");
        this.emailInput = page.locator("//input[@id='email']");
        this.genderInput = page.locator("//input[@id='female']");
        this.hobbiesInput = page.locator("//input[@id='reading']");
        this.interestsInput = page.locator("//select[@id='interests']");
        this.dateOfBirthInput = page.locator("//input[@id='dob']");
        this.profileInput = page.locator("//input[@id='profile']");
        this.bioInput = page.locator("//textarea[@id='bio']");
        this.buttonSubmit = page.locator("//button[@type='submit']");
        this.resultTableRows = page.locator("table tbody tr");
    }

    async navigate() {
        await this.page.goto('https://material.playwrightvn.com');

    }

    async clickToRegisterPage() {
        await this.linkRegisterPage.click();
    }

    async register(username: string, email: string, bio: string, dob: string, filePath?: string) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        if (await this.genderInput.isVisible()) await this.genderInput.check();
        if (await this.hobbiesInput.isVisible()) await this.hobbiesInput.check();
        if (await this.interestsInput.isVisible()) await this.interestsInput.selectOption('Art');
        if (await this.dateOfBirthInput.isVisible()){
            await this.dateOfBirthInput.fill(dob);
        }

        if(filePath && await this.profileInput.isVisible()){
            await this.profileInput.setInputFiles(filePath);
        }
        await this.bioInput.fill(bio);
        await this.buttonSubmit.click();

    }
    async verifyResigteredData(expectedUsername: string, expectedEmail: string) {
        await expect(this.resultTableRows.first()).toBeVisible();
        const tableText = await this.page.locator('table').textContent();
        expect(tableText).toContain(expectedUsername);
        expect(tableText).toContain(expectedEmail);

    }


}