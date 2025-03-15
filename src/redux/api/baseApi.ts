import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news/all-news",
    }),
    getCareers: builder.query({
      query: () => "/career",
    }),
    getNocGo: builder.query({
      query: () => "/noc",
    }),
    createSupportTicket: builder.mutation<any, any>({
      query: (data) => ({
        url: '/support/create-support',
        method: 'POST',
        body: data,
      }),
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery,useCreateSupportTicketMutation,useGetCareersQuery,useGetNocGoQuery } = baseApi