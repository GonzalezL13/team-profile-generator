const Intern = require("../lib/Intern");

test("create intern an object", () => {
    const intern = new Intern("Luis", 100, "luisg@fake.com", "U of A") 
        
    expect(intern.school).toEqual(expect.any(String));  
});


test("getRole() returns as 'Intern", () => {
    const intern = new Intern("Luis", 100, "luisg@fake.com", "U of A");

    expect(intern.getRole()).toBe("Intern")
});
