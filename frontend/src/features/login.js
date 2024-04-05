import { createSlice } from "@reduxjs/toolkit"
import { selectLogin } from "../utils/selectors";
import { getUser } from "./user";

export const onLogin = (username, password) => {

    return async (dispatch, getState) => {
        const urlServer = "http://localhost:3001/api/v1"

        if (selectLogin(getState()).isConnected) { // vérifie si la personne es deja connecté
            return;
        }

        if (username === '' || password === '') {
            console.warn('username ou password pas correct')
            return;
        }

        const connexion = {
            "email": username,
            "password": password
        }
        const requestBody = JSON.stringify(connexion);
        try {
            const reponse = await fetch(urlServer + "/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBody,
            })
            
            const responseData = await reponse.json()
            if (reponse.status === 200) {
                const token = responseData.body.token
                dispatch(signIn(token));
            }
            else {
                dispatch(rejected(responseData.body))

            }
        } catch (error) {
            dispatch(rejected(error));
            console.error(error);
        }

    }


}


const initialState = {
    isConnected: false,
    token: null,
    error: null
}



const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        signIn: (draft, action) => {
            draft.isConnected = true;
            draft.token = action.payload;
            draft.error = null;
        },
        singOut: (draft, action) => {
            draft.isConnected = false;
            draft.token = null;
            draft.error = null;

        },
        rejected: (draft, action) => {
            draft.isConnected = false;
            draft.error = action.payload;
            draft.token = null;
        },
    }
})


const { actions, reducer } = loginSlice;
export const { signIn, singOut, rejected } = actions;

export default reducer;



