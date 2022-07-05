const {
    add, sub, mul, div, sqrt, max
} = require(`./arith`);

describe("Testing the string module", ()=>{

    test("Should add inputs",()=>{
       expect(add(2,3)).toBe(5);
    });

   
    test("Should subtract inputs", () =>{
        expect(sub(6,3)).toBe(3);
    });

    test("Should multiply inputs", () =>{
        expect(mul(2,3)).toBe(6);
    });

    test("Should divid inputs", () =>{
        expect(div(12,3)).toBe(4);
    });

    test("Should square root inputs", () =>{
        expect(Math.sqrt(4)).toBe(2);
    });

    test("Should result in the largest number ", () =>{
        expect(max(Math.max(0,400,30,20, -9,-300))).toBe(400);
    });
});