import Loading from "Components/Loading"
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

      {/* base home route */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ContatosPage />
          </Suspense>
        )}
      </Route>

      {/* route to list things */}
      {/* 
      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<Loading />}>
            <ListItems id={match.params.id}/>
          </Suspense>
        )}
      </Route> */}
    </Switch>
  )
}

export default Contatos
