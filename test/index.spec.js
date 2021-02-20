import demoAction from '../src/index'
import User from '../src/models/user';
import 'regenerator-runtime/runtime'

describe("demoAction",  ()=>{
    it("should return the requested number of users and posts", async ()=>{
        const expectdU = 1, expectdP = 1;
        const actual = await demoAction(expectdU, expectdP);
        expect(actual.length).toBe(expectdU);
        let result = actual.pop();
        expect(result.user).not.toBeNull();
        expect(result.posts.length).toBe(expectdP);
        
    })

});