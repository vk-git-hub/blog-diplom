import React, { ChangeEvent, useState } from 'react'
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

type EditPostPropsType = {
    title: string,
    onChange: (newTitle: string) => void
}

const EditPost = ({title, onChange}: EditPostPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(title)


    const editModeEnabled = () => {
        setEditMode(true)
    }

    const viewModeEnabled = () => {
        setEditMode(false)
        setNewTitle(newTitle)
        onChange(newTitle)
    }

    const viewModeEnabledOnKeyPress = (e: React.KeyboardEvent<HTMLSpanElement>) => {
        if(e.key === 'Enter') {
            viewModeEnabled()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const elements = editMode
        ? <input type="text" value={newTitle} onChange={onChangeHandler} autoFocus/>
        : <span> {newTitle} </span>

    return (
        <>
            <ModeEditOutlineIcon
                onClick={editModeEnabled}
                fontSize='small'
            />
            <span
                onBlur={viewModeEnabled}
                onKeyPress={viewModeEnabledOnKeyPress}
            >
            {elements}
        </span></>
    )
}

export default EditPost