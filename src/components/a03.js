import "../App.css";
import React from "react";
import A04 from "./a04";

function A03({name}) {
  return <div>
    <div className="center" style={{width:"1060px", height:"1060px", border:"1px orange solid"}}>
        <A04 name={name}/>
    </div>
  </div>
}

export default A03;
