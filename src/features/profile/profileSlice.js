import baseQuery from "@/service/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

//RTK query
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery,
  endpoints: (build) => ({
    getProfilesAll: build.query({
      query: () => {
        `/users`;
      },
    }),
    getProfileOne: build.query({
      query: (id) => {
        `/users/${id}`;
      },
    }),
    updateProfile: build.mutation({
      query: ({ username, ...body }) => ({
        url: `/users/${username}`,
        method: "PUT",
        body,
      }),
    }),
  }),
  refetchOnFocus: true,
});

export const {
  useGetProfilesAllQuery,
  useGetProfileOneQuery,
  useUpdateProfileMutation,
} = profileApi;
