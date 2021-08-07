import React, { lazy, Suspense, FC } from 'react'
import Loading from "Components/Loading"
import {
  BrowserRouter as BaseRouter,
  Route,
  Switch,
} from "react-router-dom"

const Home        = lazy(() => import('./Home'))
const Programacao = lazy(() => import('./Programacao'))
const Transmissao = lazy(() => import('./Transmissao'))
const Fotografia  = lazy(() => import('./Fotografia'))
const Ficha       = lazy(() => import('./Ficha'))
const Contatos    = lazy(() => import('./Contatos'))
/* 
const MainPage = lazy(() => import("./Home/MainPage"))

 export const Routes: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  
  return (
    <BaseRouter>
      <Switch>

        <Route exact path={path}>
          {() => (
            <Suspense fallback={<Loading />}>
              <MainPage />
            </Suspense>
          )}
        </Route>
        
      </Switch>
    </BaseRouter>
  )
}

export default Routes  */

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
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Home match={match}/>
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
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Programacao match={match}/>
            </Suspense> 
          )}
        </Route>

        <Route path="/transmissao">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Transmissao match={match} />
              </Suspense>
            )}
        </Route>

        <Route path="/fotografias">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Fotografia match={match} />
              </Suspense>
            )}
        </Route>

        <Route path="/ficha">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Ficha match={match} />
              </Suspense>
            )}
        </Route>

        <Route path="/contatos">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Contatos match={match} />
              </Suspense>
            )}
        </Route>

      </Switch>

    </BaseRouter>
  )
}

export default Routes 
