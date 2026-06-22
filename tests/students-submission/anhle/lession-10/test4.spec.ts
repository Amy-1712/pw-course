import { test} from '@playwright/test';
import { PeronalPage } from './refactor/Page/PersonalPage';

test('test bai 4 ', async({page})=> {
  const personalPage = new PeronalPage(page);

  await personalPage.navigate();
  await personalPage.clickToPersonalPage();
  await test.step('Thêm 10 note', async() => {
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

        for( const note of notesData){
          await personalPage.addNote(note.title, note.content);
        }
  });

  await personalPage.searchNotes('một hoặc nhiều');
});