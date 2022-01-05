import "../App.css";
import React from "react";
import A19 from "./a19";

function A18({name}) {
  return <div>
     <div className="center" style={{width:"760px", height:"760px", border:"1px blue solid"}}>
         <A19 name={name}/>
    </div>
  </div>
}

export default A18;