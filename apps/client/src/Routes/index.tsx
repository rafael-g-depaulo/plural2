import React, { lazy, Suspense, FC } from 'react'
import Loading from "Components/Loading"
import {
  BrowserRouter as BaseRouter,
  Route,
  Switch,
  match,
} from "react-router-dom"

// import MainPage from "./Home/MainPage"

const Main        = lazy(() => import('./Home/MainPage'))
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
        <Route exact path="/">
          { () => (
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          )}
        </Route>

        <Route path={["/home"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
        </Route>

        <Route path={["/programacao"]}>
          { () => (
            <Suspense fallback={<Loading />}>
              <Programacao/>
            </Suspense> 
          )}
        </Route>

        <Route path="/transmissao">
          { () => (
            <Suspense fallback={<Loading />}>
              <Transmissao />
            </Suspense>
          )}
        </Route>

        <Route path="/fotografia">
          { () => (
            <Suspense fallback={<Loading />}>
              <Fotografia />
            </Suspense>
          )}
        </Route>

        <Route path="/ficha">
          { () => (
            <Suspense fallback={<Loading />}>
              <Ficha />
            </Suspense>
          )}
        </Route>

        <Route path="/contato">
          { () => (
            <Suspense fallback={<Loading />}>
              <Contatos />
            </Suspense>
          )}
        </Route>

      </Switch>

    </BaseRouter>
  )
}

export default Routes 
