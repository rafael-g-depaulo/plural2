import Loading from "Components/Loading"
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

      {/* base home route */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <FotografiaPage />
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

export default Fotografia
