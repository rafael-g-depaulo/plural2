import axios from "axios"

import { getApiUrl, getStrapiUrl } from "@plural2/server-conn-info"

// create axios instance to connect to main server
export const api = axios.create({
  baseURL: getApiUrl(),
})

// create axios instance to connect to strapi server
// console.log("strapi url", getStrapiUrl())
export const strapi = axios.create({
  baseURL: getStrapiUrl(),
})
