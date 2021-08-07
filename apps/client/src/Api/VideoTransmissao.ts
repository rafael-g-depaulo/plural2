import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface VideoTrans {
  link: string
}

export const fetchTransmLink: () => Promise<VideoTrans> = () => strapi
  .get<VideoTrans>(`/transmissao-link`)
  .then(({ data }) => data)
  // .then(({ text, image }) => ({ text, image: Asset2Image(image) }))

export const useTransmLink = () => useFetchApi<VideoTrans>(`/transmissao-link`, fetchTransmLink)
