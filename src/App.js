import React from "react";
import { useState } from "react";
function Apps(){
  const[count,AddCount] = useState(0);
  return (
  <div>
    <h1>count : {count}</h1>
    <button style={{backgroundColor : "green"}} onClick={() => {AddCount(count+1)}}>INCREMENT</button><br></br><br></br>
    <button style={{backgroundColor : "red"}} onClick={() => {AddCount(count-1)}}>DECREMENT</button><br></br><br></br>
    <button style={{backgroundColor : "blueviolet"}}onClick={() => {AddCount(0)}}>RESET</button><br></br><br></br>
  </div>
  );
}

export default Apps;