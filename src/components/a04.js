import "../App.css";
import React from "react";
import A05 from "./a05";

function A04({name}) {
  return <div>
    <div className="center" style={{width:"1040px", height:"1040px", border:"1px aqua solid"}}>
        <A05 name={name}/>
    </div>
  </div>
}

export default A04;