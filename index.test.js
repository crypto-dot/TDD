import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';

test("Capitalize First Character: No Letters", () => {
    expect(capitalize("")).toBe("");
});

test("Capitalize First Character: random letters", () => {
    expect(capitalize("adfadfaAS")).toBe('AdfadfaAS');
});

test("Capitalize First Character: numbers", () => {
    expect(capitalize(123123)).toBe("123123");
});

test("Capitalize First Character: null", () => {
    expect(capitalize(null)).toBe("");
});


test("Reverse nonString", () => {
    expect(reverseString(123123)).toBe("321321");
});

test("Reverse string: no characters", () => {
    expect(reverseString("")).toBe("");
});

test("Reverse string", () => {
    expect(reverseString("MoNgO")).toBe("OgNoM");
});

test("Reverse null value", () => {
    expect(reverseString(null)).toBe('');
});

test("Add 2 null values", () => {
    expect(calculator.add(null, null)).toBe(NaN);
});

test("Add 2 positive values", () => {
    expect(calculator.add(5, 5)).toBe(10);
});

test("Add 2 values (1 is NaN)", () => {
    expect(calculator.add(NaN, 5)).toBe(NaN);
});

test("Add 2 values (1 is NaN)", () => {
    expect(calculator.add(5, NaN)).toBe(NaN);
});

test("Add 2 negative values", () => {
    expect(calculator.add(-3, -5)).toBe(-8);
});

test("Add 1 negative 1 postive", () => {
    expect(calculator.add(-2, 0)).toBe(-2);
});

test("Subtract 2 values (NaN)", () => {
    expect(calculator.subtract(NaN, 5)).toBe(NaN);
});

test("Subtract 2 values (1 is NaN)", () => {
    expect(calculator.subtract(5, NaN)).toBe(NaN);
});


test("Subtract 1 negative 1 postive", () => {
    expect(calculator.subtract(-1, 5)).toBe(-6);
});

test("Subtract 1 postive 1 negative", () => {
    expect(calculator.subtract(1, -5)).toBe(6);
});

test("Subtract 2 postive", () => {
    expect(calculator.subtract(5, 5)).toBe(0);
});
test("Subtract 2 negative", () => {
    expect(calculator.subtract(-4, -5)).toBe(1);
});
test("Subtract 2 null values", () => {
    expect(calculator.subtract(null, null)).toBe(NaN);
});

test("Divide 2 values (1 is NaN)", () => {
    expect(calculator.divide(5, NaN)).toBe(NaN);
});

test("Divide 2 values (1 is NaN)", () => {
    expect(calculator.divide(NaN, 5)).toBe(NaN);
});

test("Divide 2 null values", () => {
    expect(calculator.divide(null, null)).toBe(NaN);
});
test("Divide a number by zero", () => {
    expect(calculator.divide(5, 0)).toBe(NaN);
});

test("Divide a positive number by a negative number", () => {
    expect(calculator.divide(5, -8)).toBe(-0.625);
});

test("Divide two negative numbers", () => {
    expect(calculator.divide(null, null)).toBe(NaN);
});

test("Multiply 2 values (1 is NaN)", () => {
    expect(calculator.multiply(NaN, 5)).toBe(NaN);
});

test("Multiply 2 values (1 is NaN)", () => {
    expect(calculator.multiply(5, NaN)).toBe(NaN);
});

test("multiply 2 numbers", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test("multiply 2 numbers (1 negative)", () => {
    expect(calculator.multiply(5, -5)).toBe(-25);
});

test("multiply 2 numbers (1 negative)", () => {
    expect(calculator.multiply(5, -5)).toBe(-25);
});

test("Shift characters: null", () => {
    expect(caesarCipher(null)).toBe(null);
});

test("Shift characters: Aevzx", () => {
    expect(caesarCipher("Aevzx")).toBe("Bfway");
});

test("Shift characters: ''", () => {
    expect(caesarCipher("")).toBe("");
});

test("Shift characters: gj.GMs.", () => {
    expect(caesarCipher("gj.GMs.")).toBe("hk.HNt.");
});

test("analyze Array: [1,2,3,4,5]", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});

test("analyze Array: [0,0,0,0,0]", () => {
    expect(analyzeArray([0, 0, 0, 0, 0])).toStrictEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 5
    });
});

test("analyze Array: [1]", () => {
    expect(analyzeArray([1])).toStrictEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
});


test("analyze Array: [-1,-2,-3,-4]", () => {
    expect(analyzeArray([-1, -2, -3, -4])).toStrictEqual({
        average: -2.5,
        min: -4,
        max: -1,
        length: 4
    });
});

test("analyze Array: []", () => {
    expect(analyzeArray([])).toStrictEqual({
        average: NaN,
        min: NaN,
        max: NaN,
        length: NaN
    });
});

