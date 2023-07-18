import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StoreType } from '../../pages/Home'

type CartState = {
  items: StoreType[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<StoreType>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions

export default cartSlice.reducer
