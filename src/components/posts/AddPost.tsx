import { ChangeEvent, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddComment';
import styles from '../../pages/Posts/Posts.module.css'
import appStyles from '../../App.module.css'

type AddPostPropsType = {
    addItem: (newEmail: string, newName: string, newPhone: string, newWebSite: string) => void
}

export const AddPost = ({ addItem }: AddPostPropsType) => { 

    const [modalOpen, setModalOpen] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newWebSite, setNewWebSite] = useState('')
    const [nameError, setNameError] = useState<boolean>(false)
    const [phoneError, setPhoneError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [webSiteError, setwebSiteError] = useState<boolean>(false)

    const openModalHandler = () => {
        setModalOpen(true)
    }

    const closeModalHandler = () => {
        setModalOpen(false)
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailError(false)
        setNewEmail(e.currentTarget.value)
    }

    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameError(false)
        setNewName(e.currentTarget.value)
    }

    const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneError(false)
        setNewPhone(e.currentTarget.value)
    }

    const WebSiteHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setwebSiteError(false)
        setNewWebSite(e.currentTarget.value)
    }



    const addItemValidation = () => {
        if (newEmail.trim() === '') {
            setEmailError(true)
        }
        if (newName.trim() === '') {
            setNameError(true)
        }
        if (newPhone.trim() === '') {
            setPhoneError(true)
        }
        if (newWebSite.trim() === '') {
            setwebSiteError(true)
        }
        if (newEmail && newPhone && newName && newWebSite) {
            addItem(newEmail, newName, newPhone, newWebSite)
            setModalOpen(false)
            setNewEmail('')
            setNewName('')
            setNewPhone('')
            setNewWebSite('')
        }
    }

    const addItemOnKeyPressHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            addItemValidation()
        }
    }

    const addItemOnclickHandler = () => {
        addItemValidation()
    }

    const validationMess = () => {
        return (
        (nameError || phoneError || emailError || webSiteError)
            && <div className={appStyles.redText}>
                <p>{nameError && 'Имя не указано'}</p>
                <p>{phoneError && 'Телефон не указан'}</p>
                <p>{emailError && 'Email не указан'}</p>
                <p>{webSiteError && 'webSite не указан'}</p>
            </div>
        )
    }

    return (
        <div>
            <Button
                className={styles.addPostBtn}
                variant='contained'
                onClick={openModalHandler}>
                <AddCardIcon sx={marginRight}/>
                Добавить
            </Button>
            <Modal
                open={modalOpen}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form
                        className={styles.addForm}
                        onKeyPress={addItemOnKeyPressHandler}>
                        <TextField
                            error={nameError}
                            label='имя'
                            id={nameError ? "outlined-error" : "outlined"}
                            value={newName}
                            onChange={nameHandler}
                            size='small'/>
                        <TextField
                            type={'tel'}
                            error={phoneError}
                            label='номер телефона'
                            id={phoneError ? "outlined-error" : "outlined"}
                            value={newPhone}
                            onChange={phoneHandler}
                            size='small'/>
                        <TextField
                            error={emailError}
                            label='email'
                            id={emailError ? "outlined-error" : "outlined"}
                            value={newEmail}
                            onChange={emailHandler}
                            size='small'/>
                        <TextField
                            error={webSiteError}
                            label='WebSite'
                            id={webSiteError ? "outlined-error" : "outlined"}
                            value={newWebSite}
                            onChange={WebSiteHandler}
                            size='small'/>    
                        <Button
                            disabled={nameError || phoneError || emailError || webSiteError}
                            className={styles.addContactModalBtn}
                            variant="contained"
                            onClick={addItemOnclickHandler}>
                            Добавить
                        </Button>
                        <div>
                            {validationMess()}
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const marginRight = {marginRight: '20px'}
