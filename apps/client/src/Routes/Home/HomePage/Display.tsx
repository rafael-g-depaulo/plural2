import React, { FC } from "react";
import Footer from './../../../Components/Footer/Footer';
import Header from './../../../Components/Header/Header';

export interface DisplayProps {
  data: 'teste'
}

export const Display: FC<DisplayProps> = ({
  data,
}) => {
  return (
    <div>
      <Header></Header>
      <div style = {{position: "absolute", top: "50px"}}>
        <p>home page</p>

        <p>the following message was recieved from the main server api:</p>
        <pre data-testid="data-json">{JSON.stringify(data!, null, 2)}</pre>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Display
