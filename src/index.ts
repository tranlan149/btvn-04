// B1: Khởi tạo class
// - Tên class viết hoa
class Department {
    // B2: Liệt kê các thuộc tính (Properties)
    // tính chất của đối tượng cần mô tả
    // access_modifier + property_name: data_type;
    private id: string;
    private name: string;
  
    // B3: Tạo 1 phương thức đặc biệt
    // Phương thức khởi tạo - Constructor function
    // Phương thức dùng để khởi tạo giá trị dành cho các thuộc tính
    // của một đối tượng (instance) khi được khởi tạo từ 1 lớp (Class)
    // --> Constructor function hoạt động như thế nào ???
    constructor(id: string, name: string) {
      // Từ khoá 'this' -> Dùng để tham chiếu (reference) tới chính
      // lớp (class) đang sử dụng nó
      // this.id === Department.id
      // this.name === Department.id
      this.id = id;
      this.name = name;
    }
  
    // B4: Mô phỏng cách hành động của đối tượng trong thực tế
    // Thông qua các phương thức (hàm)
    // Hàm ở trong lớp ---> method (phương thức)
    describe() {
      console.log(`Department: ${this.name} with ID: ${this.id}`);
    }
  
  }
let educationDepartment = new Department("1", "Education");
console.log(educationDepartment);
let accounting = {
  describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" }),
};
  
 