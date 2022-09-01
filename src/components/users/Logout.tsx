import { Button  } from "@mui/material";

export type LogoutPropsType = {
    labelText: string | null,
    handleClick: () => void
}

export const Logout = ({labelText, handleClick}: LogoutPropsType) => { 

    const onClickHandler = () => {
        handleClick()
    }

    return (
        <Button
            onClick={onClickHandler}
            variant="outlined"
        > {labelText}
        </Button>
    )
}