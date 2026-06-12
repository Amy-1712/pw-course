## DOM
### DOM: quy ước
- node gốc
- node hiện tại
- node cần chú ý
![[Pasted image 20260612215948.png]]

### DOM: relation

- self: node hiện tại
- parent: cha: là node phía trên trực tiếp của node hiện tại
- Children: con: là node phía dưới trực tiếp cả node hiện tại
- ancestor: tổ tiên
- descendant: hậu duệ là các node con, cháu, chắt,..
- sibling: anh em là những phần tử cùng cấp và cùng cha
- following: theo sau: gồm các node ở phía bên tay phải của node hiện tại
- preceding: phía trước: bao gồm các node ở phía bên tay trái của node hiện tại, trừ các node ancestor
- following-sibling: anh em phía sau
- preceding-sibling: anh em phía trc
### XPath
- XPath axes methods là các phương pháp để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hề giữa các node với nhau
- Wildcard: * : nghĩa là khớp tất cả
- Chứa thuộc tính : @attribute: sử dụng @ để truy cập thuộc tính của element
- AND và OR operators
- Lấy text bên trong element: //element[text()='exact text']
- normalize-space(): chuẩn hóa khoảng trắng: loại bỏ khoảng trắng thừa ở đầu và cuối và giữa text
- contains(): kiểm tra chứa chuỗi con: tìm element có chứa 1 phàn text không cần khớp chính xác
