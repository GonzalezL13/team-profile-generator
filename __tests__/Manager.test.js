const Manager = require("../lib/Manager");

test("create Manager an object", () => {
    const manager = new Manager("Luis", 100, "luisg@fake.com", 1331)

    expect(manager.officeNumber).toEqual(expect.any(Number))
});


test("getRole() returns as 'Manager", () => {
    const manager = new Manager("Luis", 100, "luisg@fake.com", 1331);

    expect(manager.getRole()).toBe("Manager")
});
