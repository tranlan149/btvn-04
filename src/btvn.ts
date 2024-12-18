class Todo {
    private id: string;
    private content: string;
    private status: boolean;
  
    constructor(content: string, status: boolean = false) {
      this.id = this.generateId();
      this.content = content;
      this.status = status;
    }
  
    private generateId(): string {
      return Math.random().toString(36).substring(2, 9);
    }
  
    getDetail(): { id: string; content: string; status: boolean } {
      return { id: this.id, content: this.content, status: this.status };
    }
  
    getContent(): { id: string; content: string } {
      return { id: this.id, content: this.content };
    }
  }
  
  class TodoListManager {
    private todos: Todo[] = [];
  
    addTodo(content: string): void {
      if (!content.trim()) {
        console.log("Content không được để trống.");
        return;
      }
      const newTodo = new Todo(content);
      this.todos.push(newTodo);
      console.log("Thêm công việc thành công.");
    }
  
    removeTodo(index: number): void {
      if (index < 0 || index >= this.todos.length) {
        console.log("Vị trí không hợp lệ.");
        return;
      }
      this.todos.splice(index, 1);
      console.log("Xóa công việc thành công.");
    }
  
    updateTodo(index: number, content: string): void {
      if (index < 0 || index >= this.todos.length) {
        console.log("Vị trí không hợp lệ.");
        return;
      }
      if (!content.trim()) {
        console.log("Content không được để trống.");
        return;
      }
      this.todos[index] = new Todo(content);
      console.log("Cập nhật công việc thành công.");
    }
  
    sortTodo(): void {
      this.todos.sort((a, b) => {
        const contentA = a.getDetail().content.toLowerCase();
        const contentB = b.getDetail().content.toLowerCase();
        return contentA.localeCompare(contentB);
      });
      console.log("Danh sách công việc sau khi sắp xếp:");
      this.listTodos();
    }
  
    findTodo(content: string): void {
      const foundIndex = this.todos.findIndex(
        (todo) => todo.getDetail().content === content
      );
      if (foundIndex === -1) {
        console.log("Không tìm thấy công việc.");
      } else {
        console.log(
          `Tìm thấy công việc tại vị trí ${foundIndex + 1}:`,
          this.todos[foundIndex].getDetail()
        );
      }
    }
  
    listTodos(): void {
      if (this.todos.length === 0) {
        console.log("Danh sách công việc trống.");
        return;
      }
      this.todos.forEach((todo, index) => {
        const { id, content, status } = todo.getDetail();
        console.log(
          `${index + 1}. [${status ? "✔" : " "}] ${content} (ID: ${id})`
        );
      });
    }
  }
  