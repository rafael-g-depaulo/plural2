/* import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const FichaPage = lazy(() => import("./FichaPage"))
// const ListItems = lazy(() => import("./ListItems"))

export const FichaTecnica: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  return (
    <Switch>

      {/* base home route /}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <FichaPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default FichaTecnica */

import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './FichaMobile';
import Web from './FichaPage';

const Ficha: FC = () => {
  const width = useWidth()
  if(width <= mobileLarge) {
    return <Mobile/>
  } 
  return <Web/>
}

export default Ficha
