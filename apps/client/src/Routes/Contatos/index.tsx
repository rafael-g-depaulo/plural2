/* import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const ContatosPage = lazy(() => import("./ContatosPage"))
// const ListItems = lazy(() => import("./ListItems"))

export const Contatos: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  return (
    <Switch>

      {/* base home route /}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ContatosPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Contatos */

import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './ContatosMobile';
import Web from './ContatosPage';

const Contatos: FC = () => {
  const width = useWidth()
  if(width <= mobileLarge) {
    return <Mobile/>
  } 
  return <Web/>
}

export default Contatos
