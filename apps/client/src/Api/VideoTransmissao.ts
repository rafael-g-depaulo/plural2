import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface Formulario {
  link: string
}

export const fetchTransmLink: () => Promise<Formulario> = () => strapi
  .get<Formulario>(`/transmissao-link`)
  .then(({ data }) => data)
  // .then(({ text, image }) => ({ text, image: Asset2Image(image) }))

export const useTransmLink = () => useFetchApi<Formulario>(`/transmissao-link`, fetchTransmLink)
