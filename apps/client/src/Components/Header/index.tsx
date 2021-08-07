import React, {FC} from 'react';
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import Mobile from './Mobile';
import Web from './Web';
import { NavbarProps } from 'Components/Wireframe';



const Header: FC<NavbarProps> = (props) => {
  const width = useWidth()
  if(width <= mobileLarge) {
    console.log("cu")
    return <Mobile {...props}/>
  } 
  return <Web {...props}/>
}

export default Header
