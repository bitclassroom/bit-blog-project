import axios from 'axios'

import Post from './../models/Post'
import { BASE_API_ENDPOINT } from '../shared/constans'

class PostService {
    fetchPosts() {
        const requestUrl = `${BASE_API_ENDPOINT}/posts`
        return axios
            .get(requestUrl)
            .then(({ data }) => {
                const postList = data.map((post) => {
                    return new Post(post)
                })

                return postList
            })
    }

    fetchPostDetails(postId) {

    }
}

export const postService = new PostService()
