import React, { useRef } from 'react';

const Form = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const errorRef = useRef(null)
    const succesRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            errorRef.current.innerText = " Please enter a valid email address.";
            succesRef.current.innerText = "";
            succesRef.current.innerHTML = ''
        } else {
            succesRef.current.innerHTML = 'success'
            errorRef.current.innerHTML = ''
        }
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" name="name"  ref={nameRef} placeholder='Enter A Name'/>
            <input type="text" name="email"   ref={emailRef}  placeholder='Enter A email'  />
            <button type='submit'>Submit</button>
           </form>
          <p ref={errorRef}></p>
          <p ref={succesRef}></p>
        </div>
    );
}

export default Form;
