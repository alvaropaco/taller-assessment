const Book = require('./Book');

class Library {
    books = new Map()

    constructor(books=[]) {
        this.books = books
    }

    addBook(payload) {
        if(!payload.title) throw { message: 'Missing Book Title' }
        if(!payload.autor) throw { message: 'Missing Book Autor' }
        if(!payload.year) throw { message: 'Missing Book Year' }

        const book = new Book(payload);
        this.books.set(book.title, book)
    }

    getBook(title) {
        return this.books.get(title)
    }

    getAll() {
        return this.books.values()
    }
}


module.exports = Library