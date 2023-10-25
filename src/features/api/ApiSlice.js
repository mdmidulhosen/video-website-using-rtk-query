import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost/900'
    }),
    endpoints: (builder)=> ({
        getVideo: builder.query({
            query: () => '/videos'
        })
    }),
})