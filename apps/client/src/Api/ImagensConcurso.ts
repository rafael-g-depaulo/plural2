import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface ImagemConcursoStrapi {
  id: number
  titulo: string
  nome_autor: string
  idade_autor: number
  cidade: string
  bio: string
  foto: StrapiAsset
}

export interface ImagemConcurso {
  id: number
  titulo: string
  nome_autor: string
  idade_autor: number
  cidade: string
  bio: string
  foto: Image
}

const transformImage = ({ foto, id, idade_autor, nome_autor, titulo, cidade, bio }: ImagemConcursoStrapi) => ({
  id,
  idade_autor,
  nome_autor,
  titulo,
  cidade,
  bio,
  foto: Asset2Image(foto)
}) as ImagemConcurso

export const fetchImagemConcurso = (id: number) => strapi
  .get<ImagemConcursoStrapi>(`/imagem-concursos/${id}`)
  .then(({ data }) => data)
  .then(transformImage)

export const useImagemConcurso = (id: number) => useFetchApi<ImagemConcurso>(`/imagem-concursos/${id}`, () => fetchImagemConcurso(id))
// 
export const fetchAllImagemConcurso = () => strapi
  .get<ImagemConcursoStrapi[]>(`/imagem-concursos`)
  .then(({ data }) => data)
  .then(imagens => imagens.map(transformImage))

export const useAllImagemConcurso = () => useFetchApi<ImagemConcurso[]>(`/imagem-concursos`, fetchAllImagemConcurso)
