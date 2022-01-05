import "../App.css";
import React from "react";
import A20 from "./a20";

function A19({name}) {
  return (
    <div>
      <div
        className="center"
        style={{ width: "740px", height: "740px", border: "1px black solid" }}
      >
        <A20 name={name} />
      </div>
    </div>
  );
}

export default A19;
