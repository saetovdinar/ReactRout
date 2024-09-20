import axios from 'axios';

const URL = 'http://localhost:7070/';
export async function getPosts() {
    const response = await axios.get(URL + 'posts')
    
    return response.data
}

export async function getPostByID(id: number) {
    const response = await axios.get(URL + `posts/${id}`)
    
    return response.data
}

export async function addPost(data: {content: string}) {
    await axios.post(URL + 'posts', {
  
        content: data.content
    })
    
   
}

export async function editPost(id: number, data: {id:number, content: string}) {
    await axios.put(URL + `posts/${id}`, {
        id: data.id,
        content: data.content
    })
    
   
}



export async function deletePost(id: number) {
    await axios.delete(URL + `posts/${id}`)
    
   
}