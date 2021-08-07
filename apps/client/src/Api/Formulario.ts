import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface Formulario {
  form: string
}

export const fetchFormulario: () => Promise<Formulario> = () => strapi
  .get<Formulario>(`/formulario`)
  .then(({ data }) => data)
  // .then(({ text, image }) => ({ text, image: Asset2Image(image) }))

export const useFormulario = () => useFetchApi<Formulario>(`/formulario`, fetchFormulario)
