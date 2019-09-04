const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postScheme = new Schema({
    title: String,
    type: String,
    content: String,
});

module.exports = mongoose.model("Post", postScheme);
