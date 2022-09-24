import axios from "axios";

export const BASE_URL = "https://hetecommerce.herokuapp.com/api/";//"https://hetecommerce.herokuapp.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//console.log(TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})

export default userRequest;