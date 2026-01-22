import sum from "./sum.js";


describe("test for sum function", ()=>{

    test("adds 2+2 to equal 4", ()=>{
    expect(sum(2,2)).toBe(4);
});

test("adds -7+-7 to equal 4", ()=>{
    expect(sum(-7,-7)).toBe(-14);
})

});

