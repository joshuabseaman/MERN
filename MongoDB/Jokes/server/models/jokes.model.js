const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required : [true, "Must have a setup to joke."],
        minlength : [10, "Setup must be 10 characters or longer."]
    },
    punchline: {
        type: String,
        required : [true, "Must have a punchline to joke."],
        minlength : [3, "Punchline must be 3 characters or longer."]
    }
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;