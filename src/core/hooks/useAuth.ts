import { useAppSelector } from "./reduxHooks";


export function useAuth() {
    const {id, email,errorMessCode} = useAppSelector(state => state.auth.authData)
    return {
        isAuth: !!email,
        email,
        id,
        errorMessCode
    }
}