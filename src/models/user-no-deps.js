
export default class User{
    constructor(userData, postsService){
        this.data = userData;
        this.id = userData.id;
        this._postsService = postsService;
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
        return await this._postsService.listByUser(this.id);
    }
}