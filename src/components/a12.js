import "../App.css";
import React from "react";
import A13 from "./a13";

function A12({name}) {
  return <div>
     <div className="center" style={{width:"880px", height:"880px", border:"1px black solid"}}>
         <A13 name={name}/>
     </div>
  </div>
}

export default A12;