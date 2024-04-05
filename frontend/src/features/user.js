import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        fetching: (draft, action) => {
            draft = action.payload;
        },

        rejected: (draft, action) => {
            draft = null
        }

    }
})

const {actions, reducer} = userSlice
export const { fetching, rejected} = actions
export default reducer