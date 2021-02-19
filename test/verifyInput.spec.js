/*
- You're not allowed to write production code unless 
  it's to make a failing test pass (zombie test)
- You're only allowed to write the one test the will 
  make your production code fail
- You're not allowed to write any more production code 
  than is sufficient to pass the one failing test

 questions:
What is the unit under test (module, function, class, whatever)?
What should it do? (Prose description)
What was the expected output?

*/

import verifyInput from '../src/verifyInput'

describe("verifyInput", ()=>{
  it("should pass with no rules",()=> {
    const actual = verifyInput("any value", []);
    expect(actual).toBeTruthy();
  });
  it("should fail with one failng rule", ()=>{
    const actual = verifyInput("any value", [
      input=>false
    ]);
    expect(actual).toBeFalsy();
  });
  it("should pass with a passing rule", ()=>{
    const actual = verifyInput("any value", [
      input=>true
    ]);
    expect(actual).toBeTruthy();

  });
  it("fail with many rules some failing", ()=>{
    const actual = verifyInput("any value", [
      input=>true,
      input=>false
    ]);
    expect(actual).toBeFalsy();

  })
})