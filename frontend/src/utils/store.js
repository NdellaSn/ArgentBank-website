import { configureStore } from '@reduxjs/toolkit'
import * as loginSlice from '../features/login'
import { thunkMiddleware } from './middlewares'
import * as userSlice from '../features/user'

const store = configureStore({
    reducer: {
        login: loginSlice.default,
        user: userSlice.default

    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        thunkMiddleware
    ]
})


export default store
