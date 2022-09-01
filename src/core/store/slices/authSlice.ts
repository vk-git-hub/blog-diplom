import { createSlice, createAction } from '@reduxjs/toolkit';
import { AuthDataType } from '../../../types/auth';
import { ILoginUser } from '../../../types/user';
import { ACTIONS } from '../../constants';

export type AuthStateType = {
    authData: AuthDataType,
    isCurrentDataValid: boolean, 
    isFetching: boolean
}

const initialState: AuthStateType = {
    authData: {
        id: '',
        email: '',
        errorMessCode: '',
      },
    isCurrentDataValid: true,
    isFetching: false
}

export const signInAction = createAction<ILoginUser>(ACTIONS.LOGIN_USER);

export const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserDataAction: (state, action) => {
      state.authData = { id: action.payload.id, email: action.payload.email, 
        errorMessCode: action.payload.errorMessCode }
    },

    removeUserDataAction: (state) => {
      state.authData = { id: null, email: null, errorMessCode: null };
    },

    isCurrentDataValidAction: (state, action) => {
      state.isCurrentDataValid = action.payload;
    },

    //setErrorMessCodeAction: (state, action) => {
    //  state.errorMessCode = action.payload;
    //},

    isFetchingAction: (state, action) => {
      state.isFetching = action.payload;
    },

  },
});


export const {
  setUserDataAction,
  removeUserDataAction,
  isCurrentDataValidAction,
  //setErrorMessCodeAction,  
  isFetchingAction,
} = authSlide.actions;

export default authSlide.reducer;
