import { ChangeEvent, useEffect, useState } from "react";

import { TextField } from "@mui/material";
import styles from '../../pages/Posts/Posts.module.css'

export type SearchPostPropsType = {
    value: string,
    labelText?: string,
    onChangeCallback: (currentValue: string) => void
}

export const SearchPost = ({value, labelText, onChangeCallback}: SearchPostPropsType) => { 

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (value) {
            setError(false)
        }
    }, [value])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeCallback(e.currentTarget.value)
    }

    return (
        <TextField
            className={styles.searchStyles}
            margin="dense"
            value={value}
            label={labelText}
            error={error}
            onChange={onChangeHandler}
            id="outlined-basic"
            variant="outlined"
        />
    )
}