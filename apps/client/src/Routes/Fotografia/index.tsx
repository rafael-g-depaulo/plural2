/* import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const FotografiaPage = lazy(() => import("./FotografiaPage"))
// const ListItems = lazy(() => import("./ListItems"))

export const Fotografia: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  return (
    <Switch>

      {/* base home route /}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <FotografiaPage />
          </Suspense>
        )}
      </Route>

    </Switch>
  )
}

export default Fotografia */

import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './FotografiaMobile';
import Web from './FotografiaPage';

const Fotografia: FC = () => {
  const width = useWidth()
  if(width <= mobileLarge) {
    return <Mobile/>
  } 
  return <Web/>
}

export default Fotografia
