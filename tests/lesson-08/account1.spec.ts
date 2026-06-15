import { test, expect } from '@playwright/test';
const KHOA_HOC = 'k23';
const TEN_BAN = 'anh';
const USERNAME = `${KHOA_HOC}_${TEN_BAN}`;
const EMAIL = `leanhnd94@gmail.com`;
const PASSWORD = '123456Kspn2cYboniT(%!KL8BkTONo';

test.describe('ACCOUNT - Account', async () => {
    test.beforeEach('', async ({ page }) => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            await page.locator("//input[@id='user_login']").fill('betterbytes.academy.admin');
            await page.locator("//input[@id='user_pass']").fill('StrongPass@BetterBytesAcademy');
            await page.locator("//input[@id='wp-submit']").click();
        });

    test('@ACC_001:Create account with editor permission', async ({ page }) => {
        
        await test.step('Đi tới màn quản lý user', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/users.php');

            // EXPECTED : Màn hình user hiển thị: Heading "Users" visible, Button "Add User" được enable
            await expect(page.locator('h1.wp-heading-inline')).toHaveText('Users');
            const addUserId = page.locator("//a[@class='page-title-action' and @href='https://pw-practice-dev.playwrightvn.com/wp-admin/user-new.php']");
            await expect(addUserId).toBeVisible();
            await expect(addUserId).toBeEnabled();
        });

        await test.step('Thực hiện thêm mới user', async () => {

            await page.locator("//a[@class='page-title-action' and @href='https://pw-practice-dev.playwrightvn.com/wp-admin/user-new.php']").click();
            await page.locator('#user_login').fill(USERNAME);
            await page.locator('#email').fill(EMAIL);
            await page.locator('#pass1').fill(PASSWORD);
            await page.locator('#first_name').fill(KHOA_HOC);
            await page.locator('#last_name').fill(TEN_BAN);
            await page.locator('#role').selectOption('editor');
            await page.locator("//input[@id='createusersub']").click();

            // EXPECTED : Hiển thị thông báo tạo mới user thành công: New user created.
            const notice = page.locator('#message');
            await expect(notice).toContainText('New user created.');
        });
        /* await test.step('Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo', async () => {
            //Thực hiện đăng xuất

            //Thực hiện đăng nhập lại với user name vừa tạo
            await page.locator("//input[@id='user_login']").fill('betterbytes.academy.admin');
            await page.locator("//input[@id='user_pass']").fill('StrongPass@BetterBytesAcademy');
            await page.locator("//input[@id='wp-submit']").click();

            // EXPECTED : Đăng nhập thành công và kiểm tra Menu hiển thị / ẩn
            await expect(page.locator('#dashboard')).toBeVisible();
            await expect(page.locator('#posts')).toBeVisible();
            await expect(page.locator('#media')).toBeVisible();
            await expect(page.locator('#pages')).toBeVisible();
            await expect(page.locator('#comments')).toBeVisible();
            await expect(page.locator('#profile')).toBeVisible();
            await expect(page.locator('#tools')).toBeVisible();
            await expect(page.locator('#appearance')).toBeHidden();
            await expect(page.locator('#uses')).toBeHidden();
            await expect(page.locator('#plugins')).toBeHidden();


        }); */

        await test.step('Teardown: đăng nhập vào account admin và xoá account mới được tạo ra', async () => {
            //Xoá account mới được tạo

            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/users.php');
            const userRow = page.locator(`tr:has-text("${USERNAME}")`);
            await userRow.waitFor({ state: 'visible', timeout: 5000 });
            await userRow.hover();
            await userRow.locator('//a[@ class="submitdelete"]').click();
            await page.locator('#submit').click();

            //expect:Account không còn trong danh sách tài khoản
            await expect(page.locator(`tr:has-text("${USERNAME}")`)).not.toBeVisible();

        });





    });
});