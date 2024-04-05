import { createSlice } from "@reduxjs/toolkit"

export const onLogin = (username, password) => {

    return async (dispatch, getState) => {
        const urlServer = "http://localhost:3001/api/v1"

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
                console.log(token);
                dispatch(logIn(token));
            }
            else {
                dispatch(rejected(responseData.body))
                console.log(responseData.body);

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
    name: 'connexion',
    initialState: initialState,
    reducers: {
        logIn: (draft, action) => {
            draft.isConnected = true;
            draft.token = action.payload;
            draft.error = null;
        },
        logOut: (draft, action) => {
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
export const { logIn, logOut, rejected } = actions;

export default reducer;



