const AuthorController = require('../controllers/authors.controller')


module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors)

    app.post("/api/authors", AuthorController.createNewAuthor)

    app.get("/api/authors/:id", AuthorController.findOneAuthor)

    app.delete("/api/authors/:id", AuthorController.deleteAuthor)

    app.put("/api/authors/:id", AuthorController.updateAuthor)
}