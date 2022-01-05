import "./App.css";
import React, {useState} from "react";
import Input from "./components/input";
import Bag from "./components/bag";
import A21 from "./components/a21";

const App = () => {  
  const [name , setName] = useState("")
  return <div>
    <div className="row">
      <Input setName={setName}/>
    </div>
    <Bag.Provider value={name}>
      <A21/>
    </Bag.Provider>
    {/* <A01 name={name}/> */}
  </div>
};
export default App;
