import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './Mobile';
import Web from './Web';

const Header: FC = () => {
  const width = useWidth()
  if(width <= mobileLarge) {
    return <Mobile/>
  } 
  return <Web/>
}

export default Header
