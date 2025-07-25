import React, { useRef, useState } from 'react';

function InputFocusExample(){
    const InputRef = useRef();
    const renderCountRef = useRef(0);
    const submitCountRef  = useRef(0);
    const [color,setColor]=useState('black')


renderCountRef.current += 1;

const handleSubmit = ()=>{
    const value = InputRef.current.value;
    submitCountRef.current += 1;
    InputRef.current.value = '';
    InputRef.current.focus();
};
const  handleChangeColor = ()=>{
    setColor(prev=>(prev==='black' ? 'blue':'black'))
};
return(
    <div>
        <input ref={InputRef}  type="text" placeholder="Enter Something.." />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleChangeColor}>Chnage Color</button>

        <p style={{color:color}}>
            Lorem ipsum dolor sit amet.
        </p>
        <h5>Render Count:{renderCountRef.current}</h5>
         <h5>Render Count:{renderCountRef.current}</h5>
        
    
    </div>
);

}
export default InputFocusExample;