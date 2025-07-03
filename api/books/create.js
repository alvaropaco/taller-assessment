const library = require('../../Models/Library')

module.exports = {
    create: function(req, res) {
        console.log('asidpjoaisjdoijas')
        console.log(req.body)
        try {
            const book = req.body;
            library.add(book);

            return res.json(201, 'Book created!')
        } catch(err) {
            console.log(err)
            return res.json(500, err.message)
        }
    }
}