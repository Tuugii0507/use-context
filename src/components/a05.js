import "../App.css";
import React from "react";
import A06 from "./a06";

function A05({name}) {
  return <div>
    <div className="center" style={{width:"1020px", height:"1020px", border:"1px pink solid"}}>
        <A06 name={name}/>
    </div>
  </div>
}

export default A05;