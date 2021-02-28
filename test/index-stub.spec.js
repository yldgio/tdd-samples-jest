import demoAction from '../src/index-no-deps'
import User from '../src/models/user';
import 'regenerator-runtime/runtime'
import { async } from 'regenerator-runtime/runtime';
import {fakeUserService, postsResponse, fakePostsService} from './testHelpers'

describe("demoAction",  ()=>{
  it("should return the requested or less number of users and posts", async ()=>  {
    const expectedUsers = 1, expectedPosts = 2;
    const result = await demoAction(fakeUserService, fakePostsService, expectedUsers, expectedPosts);
    expect(result.length).toBeLessThanOrEqual(expectedUsers);
    result.forEach(result=>{
      expect(result.posts.length).toBeLessThanOrEqual(expectedPosts);
    })
  });
});