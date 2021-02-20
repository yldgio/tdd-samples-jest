import {userService} from  './services/apiServices'
import User from './models/user'


export default async function demoAction(howManyUsers, howManyPosts){
    let result  = (await userService.list())
            .data
            .filter((el,i) => i < howManyUsers);
    return await Promise.all(
        result.map(async (element) => {
            let user = new User(element);
            let userPosts = await user.posts();
            //let posts = ;
            return {
                user: user.get(),
                posts: userPosts.data.filter((el,i) => i < howManyPosts)
            };
    }));
};