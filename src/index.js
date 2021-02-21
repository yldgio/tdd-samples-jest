import {userService, postsService} from  './services/apiServices'
import User from './models/user'



export default async function demoAction(howManyUsers, howManyPosts){
    let result  = (await userService.list())
            .data
            .filter((el,i) => i < howManyUsers);
    const output = await Promise.all(
        result.map(async (element) => {
            let user = new User(element);
            let userPosts = await user.posts();
            return {
                user: user.get(),
                posts: userPosts.data.filter((el,i) => i < howManyPosts)
            };
    }));
    /*
    task:
    - find all post with some special value
    - do POST those posts to another service
    - post notification to a 3rd service

    */
    return output;
};