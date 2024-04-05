import { createSlice } from "@reduxjs/toolkit";
import { selectLogin, selectUser } from "../utils/selectors";



export const getUser = async (dispatch, getState) => {
    const urlServer = "http://localhost:3001/api/v1"
        if(selectUser(getState()).isLoading)
        {
            return;
        }
    try {
        dispatch(fetching());
        const reponse = await fetch(urlServer + "/user/profile", {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + selectLogin(getState()).token
            }
        });
        const responseData = await reponse.json()

        if (reponse.status === 200) {
            dispatch(resolved(responseData.body))
        }
        else {
            dispatch(rejected(responseData.body))

        }
    } catch (error) {
        //envoyer une action rejected
        dispatch(rejected(error))
    }




}


const initialState={
    profile:null,
    error:null,
    isLoading:false
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        fetching: (draft, action) => {
            draft.isLoading = true;
        },
        resolved: (draft, action) => {
            draft.profile = action.payload;
            draft.error = null;
            draft.isLoading = false;
        },

        rejected: (draft, action) => {
            draft.profile = null;
            draft.error = action.payload;
            draft.isLoading = false;
        }

    }
})

const { actions, reducer } = userSlice
export const { resolved, rejected , fetching} = actions
export default reducer