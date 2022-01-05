import "../App.css";
import React from "react";
import A07 from "./a07";

function A06({name}) {
  return <div>
    <div className="center" style={{width:"1000px", height:"1000px", border:"1px black solid"}}>
        <A07 name={name}/>
    </div>
  </div>
}

export default A06;