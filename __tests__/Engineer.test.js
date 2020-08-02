const Engineer = require("../lib/Engineer");

test("create and engineer object", () => {
    const engineer = new Engineer("Luis", 100, "luisg@fake.com", "Gon13");

    expect(engineer.github).toEqual(expect.any(String))
});

test("getRole() returns as 'Engineer", () => {
    const engineer = new Engineer("Luis", 100, "luisg@fake.com", "Gon13");

    expect(engineer.getRole()).toBe("Engineer")
});
