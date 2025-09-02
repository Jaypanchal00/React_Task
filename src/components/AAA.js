import React,{useState} from 'react'
import {  UserContext } from './Context'
import BBB from './BBB'
export default function AAA() {
    const[state,setState]=useState({
        name:"Panchal",
        email:"jk@gmail.com"
    });
  return (
    <div>
        <h1>{state.name}</h1>
        <UserContext.Provider value={state}>
            <BBB/>
            </UserContext.Provider> 
      
    </div>
  );
}
