import React, {useState} from "react";
import {numbers} from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState] = useState(numbers)
  // STEP 2 - add the imported data to state
  return (
    <div>
      <div className="numbers-containter">
      {numberState.map((number, index) => (
        <Numbers key={index} button={number} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       </div>
    </div>
  );
};

export default Numbers