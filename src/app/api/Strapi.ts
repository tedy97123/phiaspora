import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../types/types";
const localURL = "http://localhost:8000/";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const strapiURL = "https://fantastic-ants-b03ead821d.strapiapp.com";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: strapiURL  }),
  reducerPath: "main",
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getProducts: build.query<Array<Products>, void>({
      query: () => "/api/products/",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery  } = api