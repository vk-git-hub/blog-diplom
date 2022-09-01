import { call, put, takeEvery, select, takeLatest } from 'redux-saga/effects';
import { UserCredential, AuthErrorCodes } from "firebase/auth";
import { FirebaseError  } from '@firebase/util';
import { AuthService } from '../../core/services/AuthService';
import { ACTIONS, FIREBASE_AUTH } from '../constants';
import {
  setUserDataAction,
  isCurrentDataValidAction,
  //setErrorMessCodeAction,
  isFetchingAction,  
} from '../store/slices/authSlice';

 function* signInSaga({ payload }: any) {
  try {  

    let authData = {};
    yield call(() => AuthService.signIn(payload).then(
      userCredential => { 
         authData = { id: userCredential.user.uid, email: userCredential.user.email }      
      }));

    yield put(isFetchingAction(false));
    yield put(isCurrentDataValidAction(true));
    yield put(setUserDataAction(authData));   

    //yield put({ type: ACTIONS.LOGIN_USER_SUCCESS, payload: 'success' });

  } catch (e) {
    //console.log({ e });  

    let authData = { errorMessCode: FIREBASE_AUTH.INVALIDE_AUTH };

    yield put(isFetchingAction(false));
    yield put(isCurrentDataValidAction(false));
    //yield put(setErrorMessCodeAction(AuthErrorCodes));
    yield put(setUserDataAction(authData));   

    //yield put({ type: ACTIONS.LOGIN_USER_ERROR, payload: 'error' })    
  }
}


export function* authSaga() {
  // yield takeEvery(ACTIONS.LOGIN_USER, signInSaga);
  yield takeLatest(ACTIONS.LOGIN_USER, signInSaga);
}

