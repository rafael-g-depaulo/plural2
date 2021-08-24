import { strapi } from "Api"

import useFetchApi from "Hooks/useFetchApi"

import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface ParceirosGroupStrapi {
  nome: string | null
  parceiros: StrapiAsset[]
}

interface ParceirosGroup {
  nome: string | null
  parceiros: Image[]
}

interface ParceirosStrapi {
  Parceiros: ParceirosGroupStrapi[]
}

export interface Parceiros {
  Parceiros: ParceirosGroup[]
}

export const fetchParceiros: () => Promise<Parceiros> = () => strapi
  .get<ParceirosStrapi>(`/parceiros`)
  .then(({ data }) => data)
  .then(({ Parceiros }) => ({
    Parceiros: Parceiros
      .map(p => ({
        ...p, parceiros: p.parceiros.map(asset => Asset2Image(asset)) }))
  }))

export const useParceiros = () => useFetchApi<Parceiros>(`/parceiros`, fetchParceiros)
