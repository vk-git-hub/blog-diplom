import { Link, Navigate } from "react-router-dom";

import { useAuth } from "../../core/hooks/useAuth";
import { useAppDispatch } from "../../core/hooks/reduxHooks";

import {
    removeUserDataAction
  } from '../../core/store/slices/authSlice';

import { Logout } from "../../components/users/Logout";

import appStyles from '../../App.module.css'


export const Home = () => {

    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth()
    const removeUserHandler = () => {
        dispatch(removeUserDataAction())
    }

    return isAuth
        ? <>
           <div className={`${appStyles.BtnContainer}`}>           
               <Logout
                    labelText={'Выход ' + email}
                    handleClick={removeUserHandler}
                />
           </div>          
           <div className={`${appStyles.container} ${appStyles.flexColumn}`}>
                <h1>Добро пожаловать в блог</h1>
                <h3>
                    Вы можете перейти 
                <Link className={appStyles.linkMargin} to={'/posts'}>на страницу блога</Link>
                </h3>
           </div>
          </> 
        : <Navigate to={'/login'} replace/>

}
