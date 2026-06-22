import { Page, Locator, expect } from '@playwright/test';

export class PeronalPage {
    page: Page;
    linkToPersonalPage: Locator;
    titleInput: Locator;
    contentInput: Locator;
    buttonAddNote: Locator;
    keywordInput: Locator;
    noteList : Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkToPersonalPage = page.locator("//a[@href='04-xpath-personal-notes.html']");
        this.titleInput = page.locator("//input[@id='note-title']");
        this.contentInput = page.locator("//textarea[@id='note-content']");
        this.buttonAddNote = page.locator("//button[@id='add-note']");
        this.keywordInput = page.locator("//input[@id='search']");
        this.noteList = page.locator("//ul[@id='notes-list']");

    }

    async navigate () {
        this.page.goto('https://material.playwrightvn.com');
    }

    async clickToPersonalPage (){
        this.linkToPersonalPage.click();
    }
    
    async addNote (title : string , content : string ){
      await this.titleInput.fill(title);
      await this.contentInput.fill(content);
      await this.buttonAddNote.click();
    }

    async searchNotes(keyword: string){
       await this.keywordInput.fill(keyword);
    
    }
}