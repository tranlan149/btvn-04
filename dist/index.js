"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department: ${this.name} with ID: ${this.id}`);
    }
}
let educationDepartment = new Department("1", "Education");
console.log(educationDepartment);
let accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" }),
};
