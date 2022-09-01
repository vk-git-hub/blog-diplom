import { PostItem } from '../../types/posts';
import {
    editEmailAction, editNameAction, editPhoneAction, editWebSiteAction, removePostAction
  } from '../../core/store/slices/postsSlice';

import { useAppDispatch } from "../../core/hooks/reduxHooks";
import EditPost from "./EditPost";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../pages/Posts/Posts.module.css'

type PostItemPropsType = {
    post: PostItem
}

export const PostsItem = ({ post }: PostItemPropsType) => { 
                           
    const dispatch = useAppDispatch()

    const editName = (newName: string) => {
        const newPost = { id: post.id, name: newName};
        dispatch(editNameAction(newPost));
    }
    const editPhone = (newPhone: string) => {
        const newPost = { id: post.id, phone: newPhone};        
        dispatch(editPhoneAction(newPost))
    }
    const editEmail = (newEmail: string) => {
        const newPost = { id: post.id, email: newEmail};        
        dispatch(editEmailAction(newPost))
    }
    const editWebSite = (newWebSite: string) => {
        const newPost = { id: post.id, website: newWebSite};        
        dispatch(editWebSiteAction(newPost))
    }
    const removeHandler = () => {
        dispatch(removePostAction(post.id))
    }


    return (
        <Paper
            className={`${styles.cardMargin} ${styles.cardItem}`}
            elevation={8}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        <EditPost title={post.name} onChange={editName}/>
                    </Typography>
                    <Typography color="text.secondary">
                        <EditPost title={post.phone} onChange={editPhone}/>
                    </Typography>
                    <Typography color="text.secondary">
                        <EditPost title={post.email} onChange={editEmail}/>
                    </Typography>
                    <Typography color="text.secondary">
                        <EditPost title={post.website} onChange={editWebSite}/>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={removeHandler}
                        size="small">
                        <DeleteIcon/>
                        Удалить
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
}

