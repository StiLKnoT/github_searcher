import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const githubApi =createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery(
        // {baseUrl, prepareHeaders, fetchFn, paramsSerializerm, ...baseFetchOptions}
        {
        
      baseUrl: 'https://api.github.com/'
    }),
endpoints: build => ({
        searchUsers: build.query( definition: {
            query: () => `search/users`
        })
    })

})