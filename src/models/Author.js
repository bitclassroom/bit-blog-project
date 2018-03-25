import Address from './Address'
import Company from './Company'

export default class Author {
    constructor(user) {
        this.id = user.id
        this.fullName = user.name
        this.address = new Address(user.address)
        this.company = new Company(user.company)
    }
}
