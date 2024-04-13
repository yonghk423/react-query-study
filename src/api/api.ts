//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/albums
//https://jsonplaceholder.typicode.com/todos
import axios, { AxiosInstance, AxiosResponse } from 'axios';

type DefalutType = {
    userId: number
    id: number
    title: string
    body: string
}

const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'

})

export const getPosts = async (): Promise<DefalutType[]> => {
    const response: AxiosResponse<DefalutType[]> = await instance.get<DefalutType[]>('/posts');
    return response.data.slice(0, 10);
}

export const getAlbums = async (): Promise<DefalutType[]> => {
    const response: AxiosResponse<DefalutType[]> = await instance.get("/albums")
    return response.data
}