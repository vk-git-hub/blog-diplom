import React, { ChangeEvent, useState } from 'react'
import { Button, TextField } from "@mui/material";
import appStyles from '../../App.module.css'


type FormPropsType = {
    btnTitle: string
    handleClick: (email: string, pass: string) => void
}

export const Form = ({btnTitle, handleClick}: FormPropsType)  => {

    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const onClickHandler = () => {
        handleClick(email, pass)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLSpanElement>) => {
        if (e.key === 'Enter') {
            handleClick(email, pass)
        }
    }

    const emailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const passOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
    }

    return (
        <form
            onKeyPress={onKeyPressHandler}
            className={appStyles.formContainer}>
            <TextField
                className={appStyles.formInput}
                margin="dense"
                id="standard-basic"
                placeholder="email"
                variant="outlined"
                type="email"
                value={email}
                onChange={emailOnChange}/>
            <TextField
                className={appStyles.formInput}
                margin="dense"
                id="standard-basic"
                placeholder="пароль"
                variant="outlined"
                type="password"
                value={pass}
                onChange={passOnChange}/>
            <Button
                className={appStyles.formBtn}
                variant="contained"
                onClick={onClickHandler}>
                {btnTitle}
            </Button>
        </form>
    )
}