import "../App.css";
import React from "react";
import A09 from "./a09";

function A08({name}) {
  return <div>
     <div className="center" style={{width:"960px", height:"960px", border:"1px brown solid"}}>
        <A09 name={name}/>
     </div>
  </div>
}

export default A08;