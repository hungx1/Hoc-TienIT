1. IIFE - Immediately Invoked Function Expression
Self-Invoking Function
  IIFE trông như thế nào
  Dùng dấu ; trước IIFE
  IIFE là hàm private
  Sử dụng IIFE khi nào: Giúp tránh lỗi global
  Các cách tạo ra 1 IIFE
  Ví dụ sử dụng IIFE


2. Scope - phạm vi

- Các loại phạm vi:
    + Global - Toàn cầu
    + Code block - khối mã: let, const
    + Local scope - Hàm: var, function
- Khi gọi, mỗi hàm luôn có 1 phạm vi mới được tạo
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức 1 biến được truy cập
- Khi nào 1 biến bị xoá khỏi bộ nhớ?
  + Biến Global
  + Biến trong code block và trong function
  + Biến trong hàm được tham chiếu bởi 1 hàm

3. Closure
Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó.
  Ứng dụng:
    -Viết code ngắn gon hơn
    -Biểu diễn, ứng dụng tính private trong OOP
  Lưu ý: 
    - Biến được tham chiếu (refer) trong closure sẽ không được xoá khỏi bộ nhớ khi hàm cha thực thi xong.
    - Các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn.
  
