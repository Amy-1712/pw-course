DOM: document object model
Element: Bao gồm thẻ mở, thuộc tính, giá trị thuộc tính, text, thẻ đóng
Bao gồm : 
- Thẻ tiêu chuẩn: do tổ chức
     - Thẻ cấu trúc khung trang: <html>, <head>,<body>
        Thẻ bố cục và ngữ nghĩa: <div>, <header>,<footer>, <section>
        - Thẻ nội dung: <h1> đến <h6>, <ul>,..
        - Thẻ tương tác và media: <a>, <img>
        - Thẻ form : <form>,<input>, <button>,...
- Thẻ tự định nghĩa: do dev
##### 2. Selector
    - Có 3 loại selector: 
         - Xpath: dùng đươcj hầu hết cho các trường hợp, đa dạng, có khả năng tìm các phần tử khó, hơi dài
         - CSS selector: ngắn gọn, performance cao, dùng cho các TH dễ tìm, không linh hoạt bằng Xpath
         - Playwright selector: chỉ dùng riêng cho playwright, cú pháp ngắn gọn không phụ thuộc vào cấu trúc DOM VD: Page.getByText("Add to cart");
        => Playwright selector > CSS selector > Xpath
        2.1 Xpath = XML Path
          - Có 2 loại: 
              - Tuyệt đối : đi dọc theo cây DOM và bắt đầu bới 1 /, phải viét đầy đủ đường dẫn từ root, dễ bị lỗi khi cấu trúc HTML thay đổi, ít linh hoạt
              - Tương đối: timf dựa vào đặc tính, bắt đầu bởi 2 //, format: //tenthe[@thuoctinh="giatri"], có thể tìm element ở bất kỳ vị trí nào, linh hoạt và its bị ảnh hưởng khi HTML thay đổi
              - Nên dùng Xpath tương đối
              
#### 3. Playwright basic syntax
     - test: đơn vị cơ bản để khai báo 1 test :
          import {test} from '@playwright/test';
          test ('<tên test>', async ({page})) => { 
             // code của test
          });
     - step: đơn vị nhỏ hơn test, để khai báo từng step của testcase 
           await test.step ('tên step', aysnc () => {
              // code here
           });
       Note: step nên được map 1-1 với testcase để dễ dàng maintain
     - Navigate :
           await page.goto('link');
     - Locate : Sử dụng page.locator ("<selector>") để chọn phần tử trên trang
     - Click : - Single click : await page.locator ("//button").click();
              - Double click: await page.locator("//button").dbclick();
             - Click chuột phải: page.locator ("//button").click({button : 'right'})
             - Click chuột kèm bấm phím khác : page.locator("//button").click ({modifiers : ['shift'],})
     - Input: - Fill: paste content vào 1 ô input: page.locator ("//input").fill('xinchao');
             - pressSequentially: gõ từng chữ cái vào ô input : page.locator("/input").pressSequentially('xinchao', { delay : 100, });
     - Radio/checkbox: 
          const isChecked = page.locator("//button").isChecked(); --- lấy giá trị hiện tại đang là check hay không
          page.locator("//input").check(); ---check
          page.locator("//input").setChecked(false); ----uncheck
      - Select :
          await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })
      - Upload file: 
           await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
          


