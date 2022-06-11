import React from "react";
import "./Filter.css"

const Filter = ({value,onChange}) => (
    <label className="Filter">
    Filter Name
    <input className="Input" type="text" value={value} onChange={onChange} />
  </label> 
)
   


export default Filter;


