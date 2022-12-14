import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../core/hooks/useAuth";

import { isCurrentDataValidAction, isFetchingAction, setUserDataAction, signInAction 
   } from '../../core/store/slices/authSlice';


import { useAppDispatch } from "../../core/hooks/reduxHooks";
import { ValidationForm } from "../../components/forms/ValidationForm";

import { Button } from "@mui/material";
import ReportIcon from '@mui/icons-material/Report';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import appStyles from '../../App.module.css'


export const Login = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [isTestLoginShowed, setIsTestLoginShowed] = useState<boolean>(false)

    useEffect(() => {
        dispatch(isCurrentDataValidAction(true))
    }, [])

    const setAuthData = (email: string, password: string) => {
        dispatch(isFetchingAction(true))
        dispatch(isCurrentDataValidAction(true))

     
        dispatch(
            signInAction({
              email: email,
              password: password,
            })
          );     

       /*
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const currentUser = { id: userCredential.user.uid, email: userCredential.user.email };

                dispatch(isFetchingAction(false))
                dispatch(isCurrentDataValidAction(true))
                dispatch(setUserDataAction(currentUser))
                navigate('/')
            })
            .catch(() => {
                dispatch(isFetchingAction(false))
                dispatch(isCurrentDataValidAction(false))
            })
       */
    }

    const {isAuth, errorMessCode } = useAuth()       
        if (isAuth) {
            navigate('/');
        }
   
    const validationMess = () => {
        return (
            <ul className={appStyles.redText}>               
                <ReportIcon/> {errorMessCode}
                <p> ??????????????????, ??????:</p>
                <li>?????????? ?????????? ?????? ??????????????????????????????</li>
                <li>???????????? ?????????? ???? ?????????? 7 ????????????????</li>
            </ul>
        )
    }

    const testLoginShow = () => {
        isTestLoginShowed ? setIsTestLoginShowed(false) : setIsTestLoginShowed(true)
    }

    return ( 
        <div className={`${appStyles.container} ${appStyles.flexColumn}`}>   
            <h2>??????????????????????</h2>
            <ValidationForm
                onClick={setAuthData}
                btnTitle='????????'
                validationMess={validationMess}/>

            <p>
                ?????? ?????????????????
                <Link className={appStyles.linkMargin} to={'/registration'}>
                    ????????????????????????????????????
                </Link>
            </p>
            <Button
                onClick={testLoginShow}
                variant={'outlined'}>
                ???????????????? ??????????
                {isTestLoginShowed ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </Button>
            {isTestLoginShowed &&
                <>
                    <span>??????????: bloguser@bloguser.by</span>
                    <span>????????????: 1234567</span>
                </>}
        
        </div>
    )
}
