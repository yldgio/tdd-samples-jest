import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';


export const userService = {
    list: ()=> axios.get('/users'),
    get: (id)=> axios.get(`${BASE_URL}/users/${id}`)
};

export const postsService = {
    list: ()=> axios.get('/posts'),
    get: (id)=> axios.get(`/posts/${id}`),
    listByUser: (userId)=> axios.get(`/users/${userId}/posts`),
    getByUser: (userId, id)=> axios.get(`/users/${userId}/posts/${id}`)

};

