import "../App.css";
import React from "react";
import A12 from "./a12";

function A11({name}) {
  return <div>
     <div className="center" style={{width:"900px", height:"900px", border:"1px black solid"}}>
         <A12 name={name}/>
     </div>
  </div>
}

export default A11;