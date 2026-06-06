import { test } from '@playwright/test';

test('test bai 3', async ({ page }) => {
    await test.step('Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('click vào “Bài học 3: Todo page”', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });
    await test.step('Thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        for (let i = 1; i <= 100; i++) {
            const todoItem = 'Todo ${i}';
            await page.locator("//input[@id ='new-task']").fill('todoItem');
            await page.locator("//button[@id ='add-task']").click();
        };

    });

    await test.step('Xoá các todo có số lẻ', async () => {
        for (let i = 99; i >= 1; i -= 2) {
            const todoItem = 'Todo ${i}';
            await page.locator("//button[@id ='todoitem-delete']").click();
        }
    });

});