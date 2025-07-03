const {json} = require('body-parser');
const express = require('express');
const {create} = require('./api/books/create')

try {
    const app = express()
    app.use(json)

    // 1.  **GET /books**: Retrieve a list of all books.
    // 2.  **POST /books**: Add a new book to the list. The request body should contain the title and author of the book.
    // 3.  **GET /books/:id**: Retrieve a specific book by its ID.
    // 4.  **PUT /books/:id**: Update the details of a specific book by its ID.
    // 5.  **DELETE /books/:id**: Remove a specific book by its ID.

    app.get('/books', books())
    app.post('/books', create)
    // app.put('/books/:id', updateBook())
    // app.delete('/books/:id')


    app.listen('8080', 'localhost', () => {
        console.log('hello!')
    });
} catch (error) {
    console.log(error)
}


