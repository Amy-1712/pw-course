Git: quản lý source
Github: chia sẻ code, làm việc trong nhóm
1. Cấu hình git: mở terminal gõ: 
- git config --global user.name "Anh Le"
- git config --global user.email "leanhnd94@gmail.com"
- git config --global init.defaultBranch main
1. Kết nối github: Tạo ssh key
   - ssh-keygen -t rsa -b 4096 -C "leanhnd94@gmail.com"
   - Cat key : Mở terminal: cat ~/.ssh/id_rsa.pub
2. Cách set playwright: mở terminal ở folder đã tạo gõ: npm init playwright@latest 
3. Tạo repo  trên github-> copy SSH link 
 # Về repo trên github: 
Thực hiện gõ terminal trong vs code:
- git init (khởi tạo)
- git remote add origin <url ở bước 1>
- git add . (add vào staging)
- git commit -m "init project" (commit file)
- git push origin main
Xong về repo trên github check đã đẩy lên chưa
Một số câu lệnh:
- Kiểm tra file: git status (màu xanh: vùng staging, màu đỏ là vùng working directory)
- Kiểm tra danh sách: git log
## Git- commit convention: theo cú pháp: <type>: <description> trong đó:
 1.type: loại commit
 - chore: sửa nhỏ lẻ: sửa chính tả, xoá file k dùng tới
 - feat: thêm tính năng mới, test case mới
 - Fix: sửa lỗi cho 1 tính năng trước đó
 2.Description: mô tả làm gì, ngắn gọn tối đa 50 ký tự- EN hoặc VN không dấu
ex: git commit -m"feat: them file test"