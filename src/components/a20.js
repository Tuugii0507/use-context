import "../App.css";
import React from "react";
import A21 from "./a21";

function A20({name}) {
  return <div>
    <div className="center" style={{width:"720px", height:"720px", border:"1px black solid"}}>
        <A21 name={name}/>
    </div>
  </div>
}

export default A20;