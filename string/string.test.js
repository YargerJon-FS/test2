const {
    adding, subtracting, multiplying, dividing, squareroot, max
} = require("./string")

describe("Testing the string module", ()=>{

    test("Should adding a string input",()=>{
        expect(1+1).toBe(2);
    });

   
    test("Should subtracting a string input", () =>{
        expect(1-1).toBe(0);
    });

    test("Should multiplying a string input", () =>{
        expect(4*4).toBe(16);
    });

    test("Should dividing a string input", () =>{
        expect(12/4).toBe(3);
    });

    test("Should square root a number", () =>{
        expect(Math.SQRT2).toBe(1.4142135623730951);
    });

    test("Should result in the largest number of a string of numbers", () =>{
        expect(Math.max(0,400,30,20, -9,-300)).toBe(400);
    });
});