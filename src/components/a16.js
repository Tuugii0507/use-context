import "../App.css";
import React from "react";
import A17 from "./a17";

function A16({name}) {
  return <div>
     <div className="center" style={{width:"800px", height:"800px", border:"1px black solid"}}>
         <A17 name={name}/>
     </div>
  </div>
}

export default A16;