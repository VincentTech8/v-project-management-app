import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: "api", // Unique key to store API state
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }), // Base URL for your API
    tagTypes: [],
    endpoints: (build) => ({}),
});

// Export hooks for usage in functional components
export const {} = api;
