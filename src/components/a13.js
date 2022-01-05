import "../App.css";
import React from "react";
import A14 from "./a14";

function A13({name}) {
  return <div>
     <div className="center" style={{width:"860px", height:"860px", border:"1px black solid"}}>
         <A14 name={name}/>
     </div>
  </div>
}

export default A13;