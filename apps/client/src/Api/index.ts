import axios from "axios"

import { getApiUrl, getStrapiUrl } from "@plural2/server-conn-info"

// create axios instance to connect to main server
export const api = axios.create({
  baseURL: getApiUrl(),
})

// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: getStrapiUrl(),
})
