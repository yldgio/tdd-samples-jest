import Calculator from  "../src/calculator"

/**
 * 
What is the unit under test (module, function, class, whatever)?
What should it do? (Prose description)
What was the expected output?
What is the actual output?
*/
describe("Calculator",()=>{
    describe("Add method",()=>{
        it("should return the sum two numbers",()=>{
            //prepare | setup
            const expected = 5;
            //Act
            const actual = Calculator.Add(2,3);
            //Assert
            expect(actual).toBe(expected);
        });
    });
    describe("Divide",()=>{
        it("should divide 2 numbers", ()=>{
           const actual=Calculator.Divide(5,0); 
           expect(actual).toBe(0);
        });
    })
});