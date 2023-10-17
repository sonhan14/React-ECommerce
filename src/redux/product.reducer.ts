import {createReducer} from '@reduxjs/toolkit'
import { Cart } from './product.type'
import { initalProductLists } from '../constans/product'


interface productState {
    cart: Cart[]
}

const initalState: productState = {
    cart: initalProductLists
}

const productReducer = createReducer(initalState, (builder) => {})

export default productReducer
