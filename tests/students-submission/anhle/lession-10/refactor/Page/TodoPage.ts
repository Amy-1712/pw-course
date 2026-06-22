import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
    page : Page;
    TodoInput : Locator;
    buttonAdd : Locator;
    linkTodoPage : Locator;

    constructor (page:Page){
     this.page = page;
     this.TodoInput = page.locator("//input[@id ='new-task']");
     this.buttonAdd = page.locator("//button[@id ='add-task']");
     this.linkTodoPage = page.locator("//a[@href='03-xpath-todo-list.html']");

    }
    async navigate() {
      await this.page.goto('https://material.playwrightvn.com/');
    }
    async clickTodoPage (){
        await this.linkTodoPage.click();
    }

    async addNewTask (newTask:string){
       await this.TodoInput.fill(newTask);
       await this.buttonAdd.click();
    }

    async deleteTask(index: number){
        const deleteBtn = this.page.locator(`#todo-${index}-delete`);
        await deleteBtn.click();
    }
}