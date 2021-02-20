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






const emptyResponse = {data:[]};

const sampleUserResponse = {
    data:[
        {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    ]
}
export const fakeUserService = {
    list: ()=> Promise.resolve(sampleUserResponse),
    get: (id)=> Promise.resolve(emptyResponse),
};

export const fakePostsService = {
    list: ()=> Promise.resolve(emptyResponse),
    get: (id)=> Promise.resolve(emptyResponse),
    listByUser: (userId)=> Promise.resolve(emptyResponse),
    getByUser: (userId, id)=> Promise.resolve(emptyResponse)

};