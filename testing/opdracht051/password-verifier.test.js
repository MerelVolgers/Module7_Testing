const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCase,
    hasLowerCase,
    hasDigit,
    minimumConditionsReached
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

// test of de functie minstens 1 getal heeft

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

// combine the conditions 
// minimaal 3 van de condintions have to be true
// conditie "has 1 or more lowercase" MOET true zijn

test ("minimumConditionsReached", () => {
    const conditions = [false, false, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
});

test ("minimumConditionsReached under cutoff", () => {
    const conditions = [true, true, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
});

test ("minimumConditionsReached on cutoff", () => {
    const conditions = [true, true, true, false, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
});

test ("minimumConditionsReached over cutoff", () => {
    const conditions = [true, true, true, true, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
});

// test for outer verify password

test ("verifyPassword null", () => {
    expect(verifyPassword(null)).toBe(false);
})

test ("verifyPassword 1", () => {
    expect(verifyPassword("1")).toBe(false);
})

test ("verifyPassword only digits", () => {
    expect(verifyPassword("1345")).toBe(false);
})

test ("verifyPassword only uppercase", () => {
    expect(verifyPassword("KJRN")).toBe(false);
})

test ("verifyPassword only lowercase", () => {
    expect(verifyPassword("nfjnewf")).toBe(true);
})

test ("verifyPassword only lowercase but too long", () => {
    expect(verifyPassword("jnlpoihney")).toBe(false);
})

test ("verifyPassword, correct password", () => {
    expect(verifyPassword("Ab1")).toBe(true);
})










// // test of files goed werken en npm test werkt
// test("first", () => {
//     let result = verifyPassword("eerste_test");
//     expect(result).toBe("eerste_test")
// });