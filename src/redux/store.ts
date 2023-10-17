import {configureStore} from  '@reduxjs/toolkit'
import { type } from 'os'
import productReducer from './product.reducer'

export const store = configureStore({
    reducer: {
        cart: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch