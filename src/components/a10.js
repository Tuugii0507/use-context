import "../App.css";
import React from "react";
import A11 from "./a11";

function A10({name}) {
  return <div>
     <div className="center" style={{width:"920px", height:"920px", border:"1px black solid"}}>
        <A11 name={name}/>
     </div>
  </div>
}

export default A10;