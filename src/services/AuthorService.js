import { apiService } from './apiService'
import Author from './../models/Author'

class AuthorService {
    fetchAuthors() {
        return apiService.get('/users').then(response => {
            const usersData = response.data
            return usersData.map(user => {
                return new Author(user)
            })
        })
    }

    fetchAuthor(authorId) {
        const url = `/users/${authorId}`
        return apiService.get(url).then(response => {
            const user = response.data
            return new Author(user)
        })
    }
}

export const authorService = new AuthorService()
