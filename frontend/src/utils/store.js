import { configureStore } from '@reduxjs/toolkit'
import * as loginSlice from '../features/login'
import { thunkMiddleware } from './middlewares'

const store = configureStore({
    reducer: {
        login: loginSlice.default
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        thunkMiddleware
    ]
})


export default store