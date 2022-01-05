import "../App.css";
import React from "react";
import A15 from "./a15";

function A14({name}) {
  return <div>
     <div className="center" style={{width:"840px", height:"840px", border:"1px yellow solid"}}>
         <A15 name={name}/>
     </div>
  </div>
}

export default A14;