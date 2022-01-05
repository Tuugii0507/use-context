import "../App.css";
import React from "react";
import A03 from "./a03";

function A02({name}) {
  return <div>
    <div className="center" style={{width:"1080px", height:"1080px", border:"1px red solid"}}>
        <A03 name={name}/>
    </div>
  </div>
}

export default A02;
