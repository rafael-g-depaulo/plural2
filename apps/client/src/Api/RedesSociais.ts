import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'
/* import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset" */

interface RedesSociaisStrapi {
  id: number
  link: string
  nome: string
}

export interface RedesSociais {
  id: number
  link: string
  nome: string
}

export const fetchRedesSociais = (id: number) => strapi
  .get<RedesSociaisStrapi>(`/redes-sociais/${id}`)
  .then(({ data }) => data)

export const useRedesSociais = (id: number) => useFetchApi<RedesSociais>(`/redes-sociais/${id}`, () => fetchRedesSociais(id))
// 
export const fetchAllRedesSociais = () => strapi
  .get<RedesSociaisStrapi[]>(`/redes-sociais`)
  .then(({ data }) => data)

export const useAllRedesSociais = () => useFetchApi<RedesSociais[]>(`/redes-sociais`, fetchAllRedesSociais)
