import { test, expect } from '@playwright/test';

test.describe('bài 2', () => {
    const baseURL = "https://material.playwrightvn.com/api/user-management/v1";
    let adminToken: string;
    let createdUserId: string;

    //Pre-condition: đã đăng nhập vào tài khoản admin
    test.beforeAll(async ({ request }) => {
        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": "admin@example.com",
                "password": "password"
            }
        });
        expect(loginResponse.status()).toBe(200);

        const loginJSON = await loginResponse.json();
        adminToken = loginJSON.data.token;
    });

    //Step 1: Thực hiện tạo user. Verify tạo user thành công (status code = 201 và có thông tin user mới tạo ra được trả về.
    test('Tạo user và get ra list user ', async ({ request }) => {
        const createUserResponse = await request.post(`${baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            },
            data: {
                "name": "New User",
                "email": "newuser@example.com",
                "password": "password",
                "facebook": "https://facebook.com/newuser",
                "avatar": "https://i.pravatar.cc/150?img=20",
                "hobbies": "Reading, Coding",
                "role": "user"
            }
        });
        // verify tạo user thành công
        expect(createUserResponse.status()).toBe(201);
        const createJSON = await createUserResponse.json();

        // verify thông tin user mới tạo ra được trả về đầy đủ
        expect(createJSON.data).toHaveProperty('id');
        expect(createJSON.data.email).toBe("newuser@example.com");
        expect(createJSON.data.name).toBe("New User");

        createdUserId = createJSON.data.id;

        //Step 2: Thực hiện lấy danh sách user. Kiểm tra user vừa tạo ra nằm trong danh sách user.
        const getListResponse = await request.get(`${baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }

        });
        expect(getListResponse.status()).toBe(200);
        const listJSON = await getListResponse.json();
        const userList = listJSON.data;

    });
    //Post-condition: xoá user đã tạo
     test.afterAll(async({request})=> {
        if(createdUserId) {
            const deleteResponse = await request.delete(`${baseURL}/delete.php`,{
                headers:{
                    'Authorization':`Bearer ${adminToken}`
                },
                data :{
                    id: createdUserId
                }

            });

            expect(deleteResponse.status()).toBe(200);

        }

     });

});