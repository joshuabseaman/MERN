const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [2, "Title must be 2 characters or longer."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."]
    },
    description: {
        type: String, 
        required: [true, "Description is required."],
        minlength: [10, "Description must be 10 characters or longer."]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductManagerSchema);