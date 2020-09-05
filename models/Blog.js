var mongoose = require("mongoose");


var blogSchema = new mongoose.Schema({
    title: String,
    imgurl: String,
    body: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;