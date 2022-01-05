import "../App.css";
import React from "react";
import A02 from "./a02";

function A01({name}) {
    return <div>
        <div className="center" style={{marginLeft:"20vw", width:"1100px", height:"1100px", border:"1px blue solid"}}>
            <A02 name={name}/>
        </div>
    </div>
}

export default A01;
