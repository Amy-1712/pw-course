import { test, expect } from '@playwright/test';

test.describe('API test: login success', () => {
    const baseURL = "https://material.playwrightvn.com/api/user-management/v1";

    test('Login thành công với acc là admin ', async ({ request }) => {
        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": "admin@example.com",
                "password": "password"
            }
        });

        expect(loginResponse.status()).toBe(200);

        const loginResponseJSON = await loginResponse.json();
        expect(loginResponseJSON).toHaveProperty(['data', 'token']);

        const token = loginResponseJSON.data.token;
        console.log("Token lấy được là: ", token);

    });

    test('Login thành công với acc là user ', async ({ request }) => {
        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": "john@example.com",
                "password": "password"
            }
        });

        expect(loginResponse.status()).toBe(200);

        const loginResponseJSON = await loginResponse.json();
        expect(loginResponseJSON).toHaveProperty(['data', 'token']);

        const token = loginResponseJSON.data.token;
        console.log("Token lấy được là: ", token);

    });
});
