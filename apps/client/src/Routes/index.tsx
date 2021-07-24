import React, { FC, lazy, Suspense } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom"

import Loading from 'Components/Loading'

const Home        = lazy(() => import('./Home'))
const Programacao = lazy(() => import('./Programacao'))
const Transmissao = lazy(() => import('./Transmissao'))
const Fotografia  = lazy(() => import('./Fotografia'))
const Ficha       = lazy(() => import('./Ficha'))
const Contatos    = lazy(() => import('./Contatos'))


export type RouterProps<MatchParams = {}> = {
  history?: History,
  location?: Location,
  match: match<MatchParams> | null,
}
export type Router<T = {}> = FC<RouterProps<T>>

const Routes: FC = () => {
  return (
    <BaseRouter>

      <Switch>
        
        {/* default route */}
        <Route exact path="/">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Home match={match}/>
              </Suspense> 
            )}
        </Route>
        
        {/* home router */}
        <Route path={["/home"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
        </Route>

        <Route path={["/programacao"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Programacao match={match}/>
            </Suspense> 
          )}
        </Route>

        <Route path="/transmissao">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Transmissao  />
              </Suspense>
            )}
        </Route>

        <Route path="/fotografias">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Fotografia  />
              </Suspense>
            )}
        </Route>

        <Route path="/ficha">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Ficha  />
              </Suspense>
            )}
        </Route>

        <Route path="/contatos">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Contatos  />
              </Suspense>
            )}
        </Route>

      </Switch>

    </BaseRouter>
  )
}

export default Routes
