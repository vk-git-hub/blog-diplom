import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ILoginUser } from '../../types/user';
import { BaseService } from './BaseService';


class AuthAPIService extends BaseService {

  public async signIn(profile: ILoginUser) {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, profile.email, profile.password) 
  }
}

export const AuthService = new AuthAPIService();
