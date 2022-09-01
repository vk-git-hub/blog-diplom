import { useEffect } from 'react'
import { Link, Navigate } from "react-router-dom";

import { PostItem } from '../../types/posts';

import {
  removeUserDataAction
  } from '../../core/store/slices/authSlice';

import {
    addPostAction, getPostsAction, searchPostAction
  } from '../../core/store/slices/postsSlice';

import { useAuth } from "../../core/hooks/useAuth";
import { useAppDispatch, useAppSelector  } from "../../core/hooks/reduxHooks";

import { PostsItem } from "../../components/posts/PostItem";
import { AddPost } from '../../components/posts/AddPost';
import { SearchPost } from "../../components/posts/SearchPost";
import { Logout } from "../../components/users/Logout";

import appStyles from '../../App.module.css'
import { CircularProgress } from "@mui/material";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth()    
    const isFetching = useAppSelector(state => state.posts.isFetching)
    const removeUserHandler = () => {
        dispatch(removeUserDataAction())
    }    

    useEffect(() => {
        dispatch(getPostsAction())
    }, [])

    const addPost = (newEmail: string, newName: string, newPhone: string, newWebSite: string) => {
        const newPost = { name: newName, email: newEmail, phone: newPhone, website: newWebSite};        
        dispatch(addPostAction(newPost))
    }

    const searchPost = (value: string) => {
        dispatch(searchPostAction(value))
    }

    const posts: PostItem[] = useAppSelector(state => state.posts.posts)
    const searchValue: string = useAppSelector(state => state.posts.searchValue)

    const filteredPosts = posts.filter(post => post.name.toLowerCase().includes(searchValue.toLowerCase())
      || post.email.toLowerCase().includes(searchValue.toLowerCase()) 
      || post.phone.toLowerCase().includes(searchValue.toLowerCase())
      || post.website.toLowerCase().includes(searchValue.toLowerCase()) )



    return isAuth
        ? 
          <>
           <div className={`${appStyles.BtnHeadContainer}`}>
             <h3>
              <Link className={appStyles.linkMargin} to={'/'}>Главная страница блога</Link>
             </h3>     
             <div className={`${appStyles.logoutColumn}`}>
               <Logout
                    labelText={'Выход ' + email}
                    handleClick={removeUserHandler}
                />
             </div>  
          </div>           
          <div className={`${appStyles.container} ${appStyles.flexColumn}`}>
            <div className={`${appStyles.flexColumn} ${appStyles.width50}`}>
                <SearchPost
                    value={searchValue}
                    labelText='поиск ...'
                    onChangeCallback={searchPost}
                />
                <AddPost addItem={addPost}/>
            </div>
            <div className={appStyles.container}>
                {isFetching
                    ? <CircularProgress/>
                    : filteredPosts.map(post => <PostsItem key={post.id} post={post}/>)}
             </div>
           </div>
          </>
        : <Navigate to={'/login'} replace/>


}