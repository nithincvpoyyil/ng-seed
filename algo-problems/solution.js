const factorial = (value) => {
    if (value < 1) return 1;
    else return value * factorial(value - 1);
};


const palindromeStringReversal = (stringVal) => {
    stringVal = "" + stringVal;
    stringVal = stringVal.trim();
    return stringVal === stringVal.reverse();
};

const palidromeCheck = (input) => {
    input = "" + input;
    let inputLength = input.length;
    for (let i = 0; i < inputLength / 2; i++) {
        if (input.charAt(i) !== input.charAt(inputLength - 1 - i)) {
            return false;
        }
    }
    return true;
};

const deleteProperty = (object, key) => {
    if (typeof object === "object" && Object.keys(object).indexOf(key) !== -1) {
        delete object[key];
    } else if (typeof object === "object") {
        Object.keys(object).forEach((childProperty) => {
            deleteProperty(object[childProperty], key);
        });
    }
};