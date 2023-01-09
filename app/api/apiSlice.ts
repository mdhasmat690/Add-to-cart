import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Contact {
  id: string;
  name: string;
  details: string;
  image: string;
  offer_percentage: number;
  offer_price: number;
  price: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://taskserver-jgk8.onrender.com",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    contact: builder.query<Contact, string>({
      query: (id: string) => `/product/${id}`,
    }),

    addToCart: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/carts",
        body: data,
      }),
    }),

    getCart: builder.query<Contact[], void>({
      query: () => ({ url: "/cart" }),
    }),
  }),
});

export const { useContactQuery, useAddToCartMutation, useGetCartQuery } =
  apiSlice;
