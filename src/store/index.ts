import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

import cartReducer from './reducers/cart'

export const storeRedux = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof storeRedux.getState>
