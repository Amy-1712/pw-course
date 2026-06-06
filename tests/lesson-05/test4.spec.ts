import { test } from '@playwright/test';

test('test bai 4', async ({ page }) => {
    await test.step('Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com');
    });
    await test.step('click vào “Bài học 4: Personal notes”', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });
    await test.step('Thêm 10 note', async () => {
        const notesData = [
      { title: 'click', content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web' },
      { title: 'fill', content: 'Điền dữ liệu nhập vào một hoặc nhiều ô text box đầu vào' },
      { title: 'goto', content: 'Điều hướng trình duyệt tới một trang url bất kỳ' },
      { title: 'hover', content: 'Di chuyển con trỏ chuột đến vị trí một hoặc nhiều phần tử chỉ định' },
      { title: 'selectOption', content: 'Chọn một hoặc nhiều giá trị trong thẻ select dropdown' },
      { title: 'check', content: 'Đánh dấu chọn vào ô checkbox hoặc radio button' },
      { title: 'uncheck', content: 'Bỏ đánh dấu chọn ô checkbox' },
      { title: 'isVisible', content: 'Kiểm tra trạng thái hiển thị của element trên màn hình' },
      { title: 'textContent', content: 'Lấy ra nội dung văn bản thuần phía bên trong thẻ' },
      { title: 'getAttribute', content: 'Lấy giá trị của một thuộc tính bất kỳ thuộc phần tử' },
    ];
        for (const note of notesData) {
        
           await page.locator("//input[@id='search']").fill(note.title);
           await page.locator("//textarea[@id='note-content']").fill(note.content);
           await page.locator("//button[@id='add-note']").click();
        }

    });
    await test.step('thực hiện search với keyword', async ()=> {
         await page.locator("//input[@id = 'search']").fill('một hoặc nhiều');
    });

});