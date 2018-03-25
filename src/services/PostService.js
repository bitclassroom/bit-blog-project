import { apiService } from './apiService'

import Post from './../models/Post'

class PostService {
    fetchPosts() {
        return apiService
            .get('/posts')
            .then(({ data }) => {
                const postList = data.map((post) => {
                    return new Post(post)
                })

                return postList
            })
    }

    fetchPostDetails(postId) {
        return apiService
            .get(`/posts/${postId}`)
            .then((response) => {
                const post = response.data
                return new Post(post)
            })
    }

    fetchAuthorPosts(authorId) {

        const options = {
            params: {
                userId: authorId
            }
        }

        return apiService
            .get('/posts', options)
            .then((response) => {
                const postsData = response.data
                const postList = postsData.map((post) => {
                    return new Post(post)
                })

                return postList
            })
    }
}

export const postService = new PostService()
