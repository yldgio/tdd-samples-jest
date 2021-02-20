import {postsService} from '../services/apiServices'

export default class User{
    constructor(userData){
        this.data = userData;
        this.id = userData.id;
    }
    valid(){
        return this.id > 0;
    }
    get(){
        return this.data;
    }
    async posts(){
        if(!this.valid()){
            return await Promise.reject(new Error("user ha no id"));
        }
        return await postsService.listByUser(this.id);
    }
}