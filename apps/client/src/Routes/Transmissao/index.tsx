/* import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const TransPage = lazy(() => import("./TransmissaoPage"))
// const ListItems = lazy(() => import("./ListItems"))

export const Transmissao: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  return (
    <Switch>

      {/* base home route /}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <TransPage />
          </Suspense>
        )}
      </Route>

      {/* route to list things /}
      {/* 
      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<Loading />}>
            <ListItems id={match.params.id}/>
          </Suspense>
        )}
      </Route> /}
    </Switch>
  )
}

export default Transmissao
 */

import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './TransmissaoMobile';
import Web from './TransmissaoPage';

const Transmissao: FC = () => {
  const width = useWidth()
  if(width <= mobileLarge) {
    return <Mobile/>
  } 
  return <Web/>
}

export default Transmissao
