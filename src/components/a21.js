import "../App.css";
import React, {useContext} from "react";
import Bag from "./bag";

// function A21({name}) {
    const A21 = () => {
        const name = useContext(Bag)
        console.log(name)
  return <div>
    <div className="center" style={{width:"700px", height:"700px", border:"1px black solid"}}>
        {name}
    </div>
  </div>
}

export default A21;