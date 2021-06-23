import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    //   Asyncronous action
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    //   Everything is OK
    res.status(200).json(postMessages);
  } catch (error) {
    // Error handling
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  res.send('Post creation');
};
