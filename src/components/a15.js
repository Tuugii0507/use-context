import "../App.css";
import React from "react";
import A16 from "./a16";

function A15({name}) {
  return <div>
     <div className="center" style={{width:"820px", height:"820px", border:"1px black solid"}}>
         <A16 name={name}/>
     </div>
  </div>
}

export default A15;