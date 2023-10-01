import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Redux Toolkit',
    content: 'Redux toolkit is a centralized state manager.',
  },
  {
    id: 2,
    title: 'Redux Toolkit Query',
    content:
      'Redux toolkit Query is a centralized state manager for 3rd party API.',
  },
  {
    id: 3,
    title: 'Redux Toolkit Query',
    content:
      'Redux toolkit Query is a centralized state manager for 3rd party API.',
  },
  {
    id: 4,
    title: 'Redux Toolkit Query',
    content:
      'Redux toolkit Query is a centralized state manager for 3rd party API.',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
    editPost: (state) => {},
    deletePost: (state) => {},
  },
});

export const AllPosts = (state) => state.posts;

export const { addPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
