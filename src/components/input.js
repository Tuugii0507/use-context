import React, {useEffect, useState} from "react";

const Input = ({setName}) =>{
    const [value, setValue] = useState('')
    useEffect(()=>{
                setName(value)

    },[value])
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return  <div>
        <input value={value} onChange={handleChange}/>
    </div>
}

export default Input