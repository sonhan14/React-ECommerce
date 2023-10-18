import {createAction, createReducer} from '@reduxjs/toolkit'
import { Cart } from './product.type'
import { initalProductLists } from '../constans/product'


interface productState {
    cart: Cart[]
}

const initalState: productState = {
    cart: initalProductLists
}

export const addProducts = createAction<Cart>('product/addProducts')

const productReducer = createReducer(initalState, (builder) => {
    builder.addCase(addProducts, (state, action) => {
        const add = action.payload
        const exist = state.cart.find((p) => p.id === add.id)

        const newState = state.cart.map((item) => {
            if(item.id === add.id) {
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })

        if(!newState.some((item) => item.id === add.id)) {
            newState.push(add)
        }

        state.cart = newState

        // if(exist){
        //     state.cart.map((p) => p.id === add.id ? {...p, quantity: p.quantity + 1} : p)
        // }
        // else{
        //     state.cart.push(add)
        // }
        
    })
})

export default productReducer
