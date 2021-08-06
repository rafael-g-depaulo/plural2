/* import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const PrograPage = lazy(() => import("./ProgramacaoPage"))
// const ListItems = lazy(() => import("./ListItems"))

export const Programacao: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  return (
    <Switch>

      {/* base home route /}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <PrograPage />
          </Suspense>
        )}
      </Route>

    </Switch>
  )
}

export default Programacao
 */

 import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './ProgramacaoMobile';
import Web from './ProgramacaoPage';

const Programacao: FC = () => {
  const width = useWidth()
  if(width <= mobileLarge) {
    return <Mobile/>
  } 
  return <Web/>
}

export default Programacao
