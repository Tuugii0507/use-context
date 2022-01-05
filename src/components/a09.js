import "../App.css";
import React from "react";
import A10 from "./a10";

function A09({name}) {
  return (
    <div>
      <div
        className="center"
        style={{ width: "940px", height: "940px", border: "1px black solid" }}
      >
        <A10 name={name}/>
      </div>
    </div>
  );
}

export default A09;
