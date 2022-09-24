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