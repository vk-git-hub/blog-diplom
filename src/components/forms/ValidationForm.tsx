import { Form } from "./Form";
import { useAppSelector } from '../../core/hooks/reduxHooks';

import appStyles from '../../App.module.css'
import { LinearProgress } from "@mui/material";

type ValidationFormPropsType = {
    btnTitle: string
    onClick: (email: string, password: string) => void
    validationMess: () => void
}

export const ValidationForm = ({btnTitle, onClick, validationMess}: ValidationFormPropsType) => {

    const isCurrentDataValid = useAppSelector(state => state.auth.isCurrentDataValid)
    const isFetching = useAppSelector(state => state.auth.isFetching)

    const onClickHandler = (email: string, password: string) => {
        onClick(email, password)
    }

    return (
        <>
            <Form btnTitle={btnTitle} handleClick={onClickHandler}/>

            {isFetching && <LinearProgress className={appStyles.width300px}/>}
            {!isCurrentDataValid && validationMess()}
        </>
    )
}
