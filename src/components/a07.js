import "../App.css";
import React from "react";
import A08 from "./a08";

function A07({name}) {
  return <div>
    <div className="center" style={{width:"980px", height:"980px", border:"1px black solid"}}>
        <A08 name={name}/>
    </div>
  </div>
}

export default A07;