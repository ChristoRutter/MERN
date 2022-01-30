const Author = require('../models/authors.model')


module.exports = {
    findAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors)=>{
                console.log(allAuthors)
                res.json(allAuthors)
            })
            .catch((err)=>{
                console.log(err)
                res.json({message: "Error in Find All", error: err})
            })
    },
    createNewAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err) => {
                console.log("Error in create Author")
                res.status(400).json(err)
            })
    },
    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor)
                res.json(oneAuthor)
            })
            .catch((err)=>{
                console.log("Error in One Author")
                res.json({error: err})
            })
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor)=>{
                console.log(deletedAuthor)
                res.json(deletedAuthor)
            })
            .catch((err)=>{
                console.log("Error in Delete Author")
                res.json({error: err})
            })
    },
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id},
                req.body,
                {new: true, runValidators: true}
            )
                .then((updatedAuthor)=>{
                    console.log(updatedAuthor)
                    res.json(updatedAuthor)
                })
                .catch((err)=>{
                    console.log("Error in Update Author")
                    res.status(400).json(err)
                })
    }
}