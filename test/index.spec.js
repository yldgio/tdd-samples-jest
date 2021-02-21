import demoAction from '../src/index'
import User from '../src/models/user';
import 'regenerator-runtime/runtime'
import { async } from 'regenerator-runtime/runtime';

describe("demoAction",  ()=>{
  it("should return the requested or less number of users and posts", async ()=>  {
    const expectdU = 1, expectdP = 1;
    const results = await demoAction(expectdU, expectdP);
    expect(results.length).toBeLessThanOrEqual(expectdU);
    results.forEach(result => {
        expect(result.posts.length).toBeLessThanOrEqual(expectdP);
    });
  });
});