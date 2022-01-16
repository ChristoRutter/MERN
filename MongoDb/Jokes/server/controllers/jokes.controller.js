const joke = require('../models/jokes.model')

module.exports = {
    findAllJokes: (req, res) => {
        joke.find({})
            .then(allJokes => {
                console.log(allJokes)
                res.json(allJokes)
            })
            .catch((err) => {console.log(err)})
    },
    findOneJoke: (req, res) => {
        joke.findOne({_id: req.params.id})
            .then((oneJoke) => {
                console.log(oneJoke)
                res.json(oneJoke)
            })
            .catch((err) => {console.log(err)})
    },
    createJoke: (req, res) => {
        joke.create(req.body)
            .then((newJoke) => {
                console.log(newJoke)
                res.json(newJoke)
            })
            .catch((err) => {console.log(err)})
    },
    updateJoke: (req, res) => {
        joke.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updatedJoke) => res.json(updatedJoke))
            .catch((err) => {console.log(err)})
    },
    deleteJoke: (req, res) => {
        joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=>{
                console.log(deletedJoke)
                res.json(deletedJoke)
            })
            .catch((err) => {console.log(err)})
    }
}