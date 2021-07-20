import React from 'react';
// Fetch the data from the global redux store with Redux 'Selectors'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
