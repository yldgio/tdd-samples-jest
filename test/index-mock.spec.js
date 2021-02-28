import demoAction from '../src/index'
import axios from 'axios';
import 'regenerator-runtime/runtime'
import { async } from 'regenerator-runtime/runtime';
import {fakeUserService, postsResponse, sampleUserResponse} from './testHelpers'
jest.mock('axios');

describe("demoAction",  ()=>{
  it("should return the requested or less number of users and posts", async ()=>  {
    const expectedUsers = 1, expectedPosts = 2;
    axios.get.mockImplementationOnce(()=> Promise.resolve(sampleUserResponse))
      .mockImplementationOnce(()=> Promise.resolve(postsResponse['1']));
    const result = await demoAction(expectedUsers, expectedPosts);
    expect(result.length).toBeLessThanOrEqual(expectedUsers);
    result.forEach(result=>{
      expect(result.posts.length).toBeLessThanOrEqual(expectedPosts);
    })
  });
});