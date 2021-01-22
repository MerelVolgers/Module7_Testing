// UTILITY FUNCTIONS

// functie is not null
const isNotNull = (str) => {
    return str !== null;
}

// password mag niet langer zijn dan 8 karakters:
const hasRightLength = (str) => {
    return isNotNull(str) && str.length <= 8;
}

// functie heeft uppercase character:
// uitleg functie:
// a --> a  gelijk
// A --> a ongelijk
// ab --> ab gelijk
// Ab --> ab ongelijk
const hasUpperCase = (str) => {
    return isNotNull(str) && str.toLowerCase() !== str
}

// functie heeft een uppercase character:
const hasLowerCase = (str) => {
    return isNotNull(str) && str.toUpperCase() !== str;
}

// functie heeft tenminste 1 nummer:
// gebruik van een regex /\d/
const hasDigit = (str) => /\d/.test(str);





// OUTER FUNCTIONS

const minimumConditionsReached = (conditions) => {
    // conditions is een array van booleans
    trueConditions = conditions.filter(bool=> bool);
    return trueConditions.length >=3;
};

const verifyPassword = (password) => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCase(password),
        hasLowerCase(password),
        hasDigit(password)
    ];
    const result = minimumConditionsReached (conditions) && hasLowerCase(password);
    return result;
};


module.exports = {
    verifyPassword, 
    hasRightLength, 
    isNotNull, 
    hasUpperCase, 
    hasLowerCase,
    hasDigit,
    minimumConditionsReached
};