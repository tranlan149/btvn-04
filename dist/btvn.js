"use strict";
class Todo {
    constructor(content, status = false) {
        this.id = this.generateId();
        this.content = content;
        this.status = status;
    }
    generateId() {
        return Math.random().toString(36).substring(2, 9);
    }
    getDetail() {
        return { id: this.id, content: this.content, status: this.status };
    }
    getContent() {
        return { id: this.id, content: this.content };
    }
}
class TodoListManager {
    constructor() {
        this.todos = [];
    }
    addTodo(content) {
        if (!content.trim()) {
            console.log("Content không được để trống.");
            return;
        }
        const newTodo = new Todo(content);
        this.todos.push(newTodo);
        console.log("Thêm công việc thành công.");
    }
    removeTodo(index) {
        if (index < 0 || index >= this.todos.length) {
            console.log("Vị trí không hợp lệ.");
            return;
        }
        this.todos.splice(index, 1);
        console.log("Xóa công việc thành công.");
    }
    updateTodo(index, content) {
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
    sortTodo() {
        this.todos.sort((a, b) => {
            const contentA = a.getDetail().content.toLowerCase();
            const contentB = b.getDetail().content.toLowerCase();
            return contentA.localeCompare(contentB);
        });
        console.log("Danh sách công việc sau khi sắp xếp:");
        this.listTodos();
    }
    findTodo(content) {
        const foundIndex = this.todos.findIndex((todo) => todo.getDetail().content === content);
        if (foundIndex === -1) {
            console.log("Không tìm thấy công việc.");
        }
        else {
            console.log(`Tìm thấy công việc tại vị trí ${foundIndex + 1}:`, this.todos[foundIndex].getDetail());
        }
    }
    listTodos() {
        if (this.todos.length === 0) {
            console.log("Danh sách công việc trống.");
            return;
        }
        this.todos.forEach((todo, index) => {
            const { id, content, status } = todo.getDetail();
            console.log(`${index + 1}. [${status ? "✔" : " "}] ${content} (ID: ${id})`);
        });
    }
}
