import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${localStorage.token}`);
    return headers;
  },
});

export default baseQuery;
