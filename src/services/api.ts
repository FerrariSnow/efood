import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ExtendedStoreType, StoreType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getStores: builder.query<ExtendedStoreType, void>({
      query: () => 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    }),
    getStore: builder.query<StoreType, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetStoresQuery, useGetStoreQuery } = api

export default api
