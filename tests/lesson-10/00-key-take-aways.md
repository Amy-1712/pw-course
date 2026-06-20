### TypeScript 
 - Code typescript được biên dịch qua JS trước khi chạy
     nmp install -d typescirpt
     npx tsc <file_path> // dùng lệnh này để biên dịch file ts thành file js
     sau đó chạy bằng lệnh: node <file_path>
 - Trong typescript có thể định nghĩa kiểu dữ liệu thông qua type hoặc interface
     - type:
         type <type_name> = {
             prop1: dataType1;
             prop2: dataType2;
              ...
         }
     - interface: lưu ý: interface không có dấu =
          interface < name> {
             prop1: dataType1;
             prop2: dataType2;
              ...
         } 
  - Class & extends
     - Class: dùng để mô hình hóa 1 đối tượng: có các thuộc tính (property) và hành vi (methods)
         - property: các đặc tính
         - methods: các hành động mà đối tượng có thể có
     - extends = kế thừa là cơ chế kế thừa cho phép 1 class thừa hưởng các thuộc tính và phương thức từ class khác
     - hàm super() = gọi tới hàm tạo của class cha
     
### POM
  - POM = class với:
     - Properties: các thành phần của trang web
     - Methods: các hành động trên trang web: luôn bắt đầu bằng động từ
 
  