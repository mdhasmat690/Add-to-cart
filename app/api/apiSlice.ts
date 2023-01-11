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
    baseUrl: "http://localhost:5000",
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

    getAllProduct: builder.query<Contact[], void>({
      query: () => ({ url: "/products" }),
    }),
  }),
});

export const { useContactQuery, useAddToCartMutation, useGetCartQuery,useGetAllProductQuery } =
  apiSlice;
