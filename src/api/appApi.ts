import axios from "axios";
import { PostItem } from '../types/posts';


const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const AppApi = {
    getPosts() {
        return apiInstance.get<PostItem[]>(`/users`).then(res => res.data)
    },  
}