import {userService, postsService} from '../services/apiServices'
import User from '../models/user'


export default class UserRepository{
    constructor (userService, postsService){
        this._userService = userService, 
        this._postsService = postsService;
    }
    getUsersPosts(howManyUsers, howManyPosts){
        let result  = (await this._userService.list())
        .data
        .filter((el,i) => i < howManyUsers);
        return await Promise.all(
            result.map(async (element) => {
                let user = new User(element, this._postsService);
                let userPosts = await user.posts();
                return {
                    user: user.get(),
                    posts: userPosts.data.filter((el,i) => i < howManyPosts)
                };
        }));
    }
    
}
