import { loginFailure, loginStart, loginSucess } from "./userRedux"
import {publicRequest} from "../requestMehtods";

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSucess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch,user) => {
    try {
        await publicRequest.post("/auth/register",user);
        const resLogin = await publicRequest.post("/auth/login",user);
        dispatch(loginSucess(resLogin.data));
    } catch (err) {
        console.log(err);
    }
};