import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Create a variable to store a mongoose model created from the schema outlined above, passing in a singular name and the schema above
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
