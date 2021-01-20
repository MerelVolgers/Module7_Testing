const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCase,
    hasLowerCase,
    hasDigit
} = require("./password-verifier");

// test lengte van password meer dan 8 cijfers is false:
test("hasRightLength", () => {
    expect(hasRightLength("123456789")).toBe(false);
});

// test lengte van password 8 cijfers is true:
test("hasRightLength, happy path 1 ", () => {
    expect(hasRightLength("12345678")).toBe(true);
});

// test lege string to be true:
test("hasRightLength, happy path 2 ", () => {
    expect(hasRightLength("")).toBe(true);
});

test("hasRightLength, null", () => {
    expect(hasRightLength(null)).toBe(false);
})




// test dat password niet null is:
test ("isNotNull", () => {
    expect(isNotNull(null)).toBe(false);
})

test ("isNotNull, happy path", () => {
    expect(isNotNull("a")).toBe(true);
})


// password moet tenminste 1 uppercase character hebben:

test ("hasUpperCase" , () => {
    expect(hasUpperCase("a")).toBe(false);
})

test ("hasUpperCase, happy path 1", () => {
    expect(hasUpperCase("A")).toBe(true);
})

test ("hasUpperCase, happy path 2" , () => {
    expect(hasUpperCase("Ab")).toBe(true);
})

test ("hasUpperCase, only digits" , () => {
    expect(hasUpperCase("12")).toBe(false);
})


// password moet tenminste 1 lowerCase character hebben:

test ("hasLowerCase" , () => {
    expect(hasLowerCase("Z")).toBe(false);
})

test ("hasLowerCase, happy path 1", () => {
    expect(hasLowerCase("z")).toBe(true);
})

test ("hasLowerCase, happy path 2" , () => {
    expect(hasLowerCase("Zy")).toBe(true);
})

test ("hasLowerCase, only digits" , () => {
    expect(hasLowerCase("12")).toBe(false);
})

//

test ("hasDigit" , () => {
    expect(hasDigit("a")).toBe(false);
})

test ("hasDigit, happy path 1" , () => {
    expect(hasDigit("1")).toBe(true);
})

test ("hasDigit, happy path 2" , () => {
    expect(hasDigit("a1")).toBe(true);
})

test ("hasDigit, null" , () => {
    expect(hasDigit(null)).toBe(false);
})












// test of files goed werken en npm test werkt
test("first", () => {
    let result = verifyPassword("eerste_test");
    expect(result).toBe("eerste_test")
});