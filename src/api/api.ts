//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/albums
//https://jsonplaceholder.typicode.com/todos
import { AxiosResponse } from 'axios';

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

import axios from 'axios';

export const getPosts = async (): Promise<Post[]> => {
    const response: AxiosResponse<Post[]> = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}   