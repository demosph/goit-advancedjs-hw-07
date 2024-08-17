/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  public name: string; // доступна всім
  private department: string; // доступна лише всередині класу Employee
  protected salary: number; // доступна лише всередині класу Employee та його підкласів

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary); // Викликаємо конструктор суперкласу Employee
    this.salary += 10000; // Збільшуємо зарплату на 10000
  }
}

// Створюємо екземпляри класів Employee і Manager
const employee = new Employee('Alice', 'Engineering', 50000);
const manager = new Manager('Bob', 'Engineering', 50000);

// Викликаємо методи та виводимо результати
console.log(employee.getEmployeeDetails()); // Name: Alice, Department: Engineering, Salary: 50000
console.log(manager.getEmployeeDetails()); // Name: Bob, Department: Engineering, Salary: 60000

export {};