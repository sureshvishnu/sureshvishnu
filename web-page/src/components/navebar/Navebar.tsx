import React from "react";
import {Navebarbox,H1tag} from '../navebar/Navebar_style';

const Navebar =() =>{
    return(
       <>
         <Navebarbox>
            <H1tag>Fruits</H1tag>
            <H1tag>Vegetables</H1tag>
            <H1tag>Dairy & Bakery</H1tag>
            <H1tag>Staples</H1tag>
         </Navebarbox>
        
      </>
    )
}
export default Navebar;