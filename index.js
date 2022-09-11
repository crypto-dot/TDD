
const capitalize = (str) => {
    if (str == null) {
        return '';
    }
    return String(str).slice(0, 1).toUpperCase().concat(String(str).slice(1));
}

const reverseString = (str) => {
    if (str == null) {
        return '';
    }
    const stringReversed = String(str);
    const charArr = [];
    for (let i = stringReversed.length - 1; i >= 0; i--) {
        charArr.push(stringReversed[i]);
    }
    return charArr.join('');
}

const calculator = {

    add(num1, num2) {
        if (num1 == null || num2 == null) {
            return NaN;
        }
        return num1 + num2;
    },

    subtract(num1, num2) {
        if (num1 == null || num2 == null) {
            return NaN;
        }
        return num1 - num2;
    },

    divide(num1, num2) {
        if (num1 == null || num2 == null) {
            return NaN;
        }
        if (num2 === 0) {
            return NaN;
        }
        return num1 / num2;
    },
    multiply(num1, num2) {
        if (num1 == null || num2 == null) {
            return NaN;
        }
        return num1 * num2;
    },
}

const caesarCipher = (str) => {
    if (str == null) {
        return str;
    }
    const strArray = str.split("");
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = shiftCharacter(strArray[i]);
    }
    return strArray.join("");
}

const shiftCharacter = (char) => {
    const arrayShift = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A'];

    let shiftIndex = arrayShift.findIndex(character => char == character) + 1;

    if (shiftIndex == 0) {
        return char;
    }
    char = arrayShift[arrayShift.findIndex(character => char == character) + 1];
    return char;
}

const analyzeArray = (arr) => {
    if (arr.length === 0) {
        return {
            average: NaN,
            min: NaN,
            max: NaN,
            length: NaN
        }
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let average = total / arr.length;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return {
        average: average,
        min: min,
        max: max,
        length: arr.length
    }

}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }