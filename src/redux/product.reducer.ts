import { createAction, createReducer } from '@reduxjs/toolkit'
import { Cart } from './product.type'
import { initalProductLists } from '../constans/product'


interface productState {
    cart: Cart[]
}

const initalState: productState = {
    cart: initalProductLists
}

export const addProducts = createAction<Cart>('product/addProducts',)

export const deleteProducts = createAction<Cart>('product/deleteProducts')

const productReducer = createReducer(initalState, (builder) => {
    builder.addCase(addProducts, (state, action) => {
        const add = action.payload

        const newState = state.cart.map((item) =>
            item.id === add.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        if (!newState.some((item) => item.id === add.id)) {
            newState.push(add)
        }
        state.cart = newState

    }).addCase(deleteProducts, (state, action) => {
        const deleteProduct = action.payload

        const newState = state.cart.map((item) =>
            item.id === deleteProduct.id && item.quantity > 0
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter((item) => item.quantity > 0);


        state.cart = newState

    }).addDefaultCase((state, action) => {})
})

export default productReducer
