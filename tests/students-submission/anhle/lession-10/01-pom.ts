import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";

class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = "//a[contains(text(),'Register')]";
        this.xpathProductPage = "//a[contains(text(),'Product')]";
        this.cssTodoPage = ".todo-container";
        this.personalNote = page.locator("#personal-note-id");
    }


    openMaterialPage(): string {
        return this.page.url();
    }
    gotoPage(pageName: string) {

    }
}

class RegisterPage extends MaterialBasePage {
    xpathUsername: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        super(page);
        this.xpathUsername = "//input[@id='username']";
        this.xpathEmail = "//input[@id='email']";
        this.xpathGenderMale = "//input[@id='male']";
        this.xpathGenderFemale = "//input[@id='female']";

    }

    async fillUsername(username: string) {
        await this.page.fill(this.xpathUsername, username);
    }

    async fillEmail(email: string) {
        await this.page.fill(this.xpathEmail, email);
    }
    checkGender(gender: string) {

    }
}