import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { isCurrentDataValidAction, isFetchingAction, setUserDataAction 
    } from '../../core/store/slices/authSlice';

import { useAppDispatch } from '../../core/hooks/reduxHooks';
import { ValidationForm } from "../../components/forms/ValidationForm";

import ReportIcon from "@mui/icons-material/Report";
import appStyles from '../../App.module.css'


export const Registration = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(isCurrentDataValidAction(true))
    }, [])

    const setNewLogin = (email: string, password: string) => {
        dispatch(isFetchingAction(true))
        dispatch(isCurrentDataValidAction(true))
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
    }

    const validationMess = () => {
        return (
            <div className={appStyles.redText}>
                <ul>
                    <ReportIcon/> Проверьте, что:
                    <li>email введен верно</li>
                    <li>пароль имеет не менее 7 символов</li>
                    <li>логин ранее не был зарегистрирован</li>
                </ul>
            </div>
        )
    }

    return (
        <div className={`${appStyles.container} ${appStyles.flexColumn}`}>
            <h2>Регистрация</h2>
            <ValidationForm
                onClick={setNewLogin}
                btnTitle='Зарегистрировать'
                validationMess={validationMess}/>
            <p>
            Уже создан аккаунт?
                <Link className={appStyles.linkMargin} to={'/login'}>
                    Авторизация
                </Link>
            </p>
        </div>
    )
}
