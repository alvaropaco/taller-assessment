const library = require('../../Models/Library')

module.exports = {
    get: (req, res) => {
        console.log('asidpjoaisjdoijas')
        try {
            const book = req.body;
            const allBooks = library.getAll(book);

            return res.json(200, JSON.stringify(allBooks))
        } catch(err) {
            console.log(err)
            return res.json(500, err.message)
        }
    }
}