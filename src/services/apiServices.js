import axios from 'axios'


export const axiosService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
});


export const userService = {
    list: ()=> axiosService.get('/users'),
    get: (id)=> axiosService.get(`/users/${id}`)
};

export const postsService = {
    list: ()=> axiosService.get('/posts'),
    get: (id)=> axiosService.get(`/posts/${id}`),
    listByUser: (userId)=> axiosService.get(`/users/${userId}/posts`),
    getByUser: (userId, id)=> axiosService.get(`/users/${userId}/posts/${id}`)

};