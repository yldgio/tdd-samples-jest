import demoAction from '../src/index'
import User from '../src/models/user';
import 'regenerator-runtime/runtime'
import { async } from 'regenerator-runtime/runtime';
import axios from 'axios'
import {emptyResponse, sampleUserResponse, postsResponse} from './testHelpers'
jest.mock('axios');

describe("demoAction",  ()=>{
  it("should return the requested or less number of users and posts", async ()=>  {
    const expectdU = 1, expectdP = 1;
    axios.get.mockImplementationOnce(()=> Promise.resolve(sampleUserResponse))
        .mockImplementationOnce(()=> Promise.resolve(postsResponse['1']));
    const results = await demoAction(expectdU, expectdP);
    expect(results.length).toBeLessThanOrEqual(expectdU);
    expect(axios.get).toHaveBeenCalledWith('/users')
    results.forEach(result => {
        expect(result.posts.length).toBeLessThanOrEqual(expectdP);
    });
  });
});