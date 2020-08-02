const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Luis", 100, "luisg@fake.com");

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});

test("getRole() returns as 'Employee", () => {
    const employee = new Employee("Luis", 100, "luisg@fake.com");

    expect(employee.getRole()).toBe("Employee")
});

