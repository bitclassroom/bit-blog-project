import { API } from '../shared/api'

import Post from './../models/Post'

class PostService {
    async fetchPosts() {
        const { data } = await API.get('/posts')
        const posts = data.map(post => new Post(post))

        return posts.reverse()
    }

    async fetchPostDetails(postId) {
        const { data } = await API.get(`/posts/${postId}`)
        return new Post(data)
    }

    async fetchAuthorPosts(authorId) {
        const options = {
            params: {
                userId: authorId,
                _limit: 4
            }
        }

        const { data } = await API.get('/posts', options)
        const postList = data.map(post => new Post(post))

        return postList
    }

    async createPost(payload) {
        const { data } = await API.post('/posts', payload)

        return new Post(data)
    }
}

export const postService = new PostService()
