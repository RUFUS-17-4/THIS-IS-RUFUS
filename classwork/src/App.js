import React from "react";
import { useState } from "react";

const Basicform=()=>{
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[message,setMessage]=useState('');

  const Inputs =(event)=>{
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(message);
  }

  return(
    <form onSubmit ={Inputs}>
      <label>Name : <input id= "name" type= "text" onChange={(event)=>setName(event.target.value)}></input></label><br></br><br></br>
      <label>Email : <input id= "email" type= "email" onChange={(event)=>setEmail(event.target.value)}></input></label><br></br><br></br>
      <label>Password : <input id= "email" type= "password" onChange={(event)=>setPassword(event.target.value)}></input></label><br></br><br></br>
      <label>Leave Your Message Here : <textarea id= "message" cols="40" rows="5" onChange={(event)=>setMessage(event.target.value)}></textarea></label><br></br><br></br>
      <button>Submit</button>
    </form>
  )
}
export default Basicform;