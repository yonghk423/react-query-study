//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/albums
//https://jsonplaceholder.typicode.com/todos
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type Post = {
    nextCursor: number
}

export type DefalutType = {
    userId: number
    id: number
    title: string
    body: string
    post: Post[]
}

const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'

})

export const getPosts = async ({ pageParam = 1 }): Promise<DefalutType[]> => {
    const defalutResponse: AxiosResponse<DefalutType[]> = await instance.get<DefalutType[]>(`/posts`);
    const response: AxiosResponse<DefalutType[]> = await instance.get<DefalutType[]>(`/posts?_page=${pageParam}&_limit=10`);
    return response.data.slice(0, 10);
}

const fetchPosts = async ({ pageParam = 1 }) => {
    const limit = 10;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${limit}`);
    return res.data;
};

export const getAlbums = async (): Promise<DefalutType[]> => {
    const response: AxiosResponse<DefalutType[]> = await instance.get("/albums")
    return response.data
}