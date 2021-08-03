import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

export interface RedesSociais {
  facebook?: string,
  instagram?: string,
}

export const fetchSingletonExample: () => Promise<RedesSociais> = () => strapi
  .get<RedesSociais>(`/singleton-example`)
  .then(({ data }) => data)
  // .then(({ text, image }) => ({ text, image: Asset2Image(image) }))

export const useSingletonExample = () => useFetchApi<RedesSociais>(`/singleton-example`, fetchSingletonExample)
