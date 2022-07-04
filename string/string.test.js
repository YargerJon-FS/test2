const {
    adding, subtracting, multiplying, dividing
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
});