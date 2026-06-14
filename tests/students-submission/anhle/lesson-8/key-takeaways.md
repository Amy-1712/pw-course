### Test-group/test suite
- test suite là tập hợp test case
- test suite giúp nhóm các test lại cho dễ quản lý
- test suite trong playwright: 
       test.describe('tên suite', async () => {
          test ('test1', async({page}) => {
               // code....
          }); 

          test ('test2', async({page}) => {
               // code....
          }); 
       });
### Test hooks: là các thời điểm chạy test, chạy suite 
  - Các hooks: 
     - beforeAll
     - beforeEach
     - afterEach
     - afterAll
     ![[Pasted image 20260614155313.png]]
### Playwright Assertion
    - Assertion là 1 câu lệnh để kiểm tra  xem 1 điều gì đó có đúng như expect hay không.
    - Không có assertion  = không biết test có thành công hay thất bại
    - Playwright assert thông qua hàm expect:
           import { test, expect } from '@playwright/test'
           test ("Test1", async({ page }) => {
              // khẳng địh rằng: title trang phải là "Home page"
              await expect (page).toHaveTitle('Homepage');
           
           })
        - Các loại assertion: 
             -  Generix Assertions (từ thư viện expect)
                - expect(giá trị) = (giá trị)
                      VD: expect(value).toBe(expected);
                         expect(array).toHaveLength(3);
             - Web-first Assertions (auto-waiting)
                   - expect(phần tử) có giá trị
                   - Web-first assertion phổ biến:
                        - Element State:
                              //Kiểm tra visibility
                              await expect(locator).toBeVisible();
                              await expect(locator).toBeHidden();
                              //Kiểm tra enable/disable
                              await expect(locator).toBeEnable();
                              await expect (locator).toBeDisabled();
                              //Kiểm tra checked (checkbox/radio)
                              await expect (locator).toBeChecked();
                              //Kiểm tra focus
                              await expect(locator).toBeFoccused();
                          - Text & Content
                             // Có chứa text
                            await expect(locator).toContainText('Hello');
                             // Text chính xác
                              await expect(locator).toHaveText('Welcome');

                            // Text khớp regex
                             await expect(locator).toHaveText(/welcome/i);

                            // Kiểm tra nhiều elements
                              await expect(locator).toHaveText(['Item 1', 'Item 2']);
                          - Attributes & Properties:
                             // Kiểm tra attribute
                                await expect(locator).toHaveAttribute('href', '/about');

                             // Kiểm tra class
                               await expect(locator).toHaveClass('active');
                               await expect(locator).toHaveClass(/btn-primary/);

                             // Kiểm tra value (input fields)
                               await expect(locator).toHaveValue('john@example.com');
                            // Kiểm tra count
                             await expect(locator).toHaveCount(5);
                          - Page Assertions
                            // URL
                            await expect(page).toHaveURL('https://example.com/');
                             await expect(page).toHaveURL(/.*checkout/);

                            // Title
                             await expect(page).toHaveTitle('My App');