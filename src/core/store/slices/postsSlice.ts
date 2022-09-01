import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from "redux";
import { v1 } from "uuid";
import { PostItem } from '../../../types/posts';
import { AppApi } from "../../../api/appApi";


export type PostStateType = {
    posts: PostItem[],
    searchValue: string,
    isCurrentDataValid: boolean,
    isFetching: boolean
}

const initialState: PostStateType = {
    posts: [],
    searchValue: '',
    isCurrentDataValid: true,
    isFetching: false
}

export const postsSlide = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPostAction: (state, action) => {
      if (state.posts) {
        const newPosts = [
          {id: v1(), name: action.payload.name, phone: action.payload.phone,
            email: action.payload.email, website: action.payload.website},  
          ...state.posts     
        ]
        state.posts = newPosts; 
      }
    },

    removePostAction: (state, action) => {
      if (state.posts) {
        const newPosts = state.posts.filter(post => post.id !== action.payload);
        state.posts = newPosts;
      }
    },

    searchPostAction: (state, action) => {
      state.searchValue = action.payload;
    },

    setPostsAction: (state, action) => {
      state.posts = action.payload;
    },

    editEmailAction: (state, action) => {
      const newPosts = state?.posts.map((post: PostItem) => ({
        ...post,
        posts: post.id === action.payload.id
                ? {...post, email: action.payload.email}
                : post
      }));
      state.posts = newPosts;
    },

    editNameAction: (state, action) => {
      const newPosts = state?.posts.map((post: PostItem) => ({
        ...post,
        posts: post.id === action.payload.id
                ? {...post, name: action.payload.name}
                : post
      }));
      state.posts = newPosts;
    },

    editPhoneAction: (state, action) => {
      const newPosts = state?.posts.map((post: PostItem) => ({
        ...post,
        posts: post.id === action.payload.id
                ? {...post, phone: action.payload.phone}
                : post
      }));
      state.posts = newPosts;
    },

    editWebSiteAction: (state, action) => {
      const newPosts = state?.posts.map((post: PostItem) => ({
        ...post,
        posts: post.id === action.payload.id
                ? {...post, website: action.payload.website}
                : post
      }));
      state.posts = newPosts;
    },    

    isCurrentDataValidAction: (state, action) => {
      state.isCurrentDataValid = action.payload;
    },

    isFetchingAction: (state, action) => {
      state.isFetching = action.payload;
    },

  },
});

export const getPostsAction = () => {
  return (dispatch: Dispatch) => {
      dispatch(isFetchingAction(true))
      AppApi.getPosts().then(post => {
          dispatch(isFetchingAction(false))
          dispatch(setPostsAction(post))
      })
  }
}

export const {
  addPostAction,
  removePostAction,
  searchPostAction,
  setPostsAction,
  editEmailAction,
  editNameAction,
  editPhoneAction,
  editWebSiteAction,
  isCurrentDataValidAction,
  isFetchingAction,
} = postsSlide.actions;

export default postsSlide.reducer;
