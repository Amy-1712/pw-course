import { test } from '@playwright/test';
import { TodoPage } from './refactor/Page/TodoPage';

test('bai_test 3', async ({ page }) => {
    test.setTimeout(60000);
    const todopage = new TodoPage(page);

    await todopage.navigate();
    await todopage.clickTodoPage();

    await test.step('thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        for (let i = 1; i <= 100; i++) {
            const todoItem = `Todo ${i}`;
            await todopage.addNewTask(todoItem);
        }
    });
    await test.step('Xoá các todo có số lẻ', async () => {
        for (let i = 1; i <= 100; i += 2) {
            await todopage.deleteTask(i);
        }
    });


});