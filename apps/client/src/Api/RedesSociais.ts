import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'
/* import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset" */
export interface RedesSociais {
  facebook?: string
  youtube?: string
  instagram?: string
  twitter?: string
  formulario?: string
}

export const fetchRedesSociais = () => strapi
  .get<RedesSociais>(`/redes-sociais`)
  .then(({ data }) => data)

export const useRedesSociais = () => useFetchApi<RedesSociais>(`/redes-sociais`, () => fetchRedesSociais())
