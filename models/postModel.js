const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        picture: {
            type: String
        },
        likers: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const PostModel = mongoose.model('post', PostSchema);
module.exports = PostModel;