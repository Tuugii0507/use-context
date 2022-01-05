import "../App.css";
import React from "react";
import A18 from "./a18";

function A17({name}) {
  return <div>
     <div className="center" style={{width:"780px", height:"780px", border:"1px black solid"}}>
        <A18 name={name}/>
    </div>
  </div>
}

export default A17;