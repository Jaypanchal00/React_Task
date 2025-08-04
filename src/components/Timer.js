import React, { useRef, useState,useEffect} from 'react';
export default function Timer() {
const [text, settext] = useState('')
const [wpm, setwpm] = useState(0);
const [second, setsecond] = useState(0)
const [showresult, setShowresult] = useState(false)
const timer = useRef(null)



function handleChange(e) {
    settext(e.target.value);
    if (!timer.current) {
        timer.current = setInterval(() => {
            setsecond(s => s + 1)
        }, 1000)
    }
}

const handleSubmit = () => {
    clearInterval(timer.current)
    timer.current = null
    setShowresult(true)
}   
setTimeout(() => {
     setShowresult(false)
     settext('')
    
}, 5000);

useEffect(() => {
    const words =text.trim().split().length;
    if(second>0){
        setwpm(Math.round((words/second) *60))
    }
})

const char = text.replace(/\s/g, '').length;


    return (
        <div>
            <textarea value={text} placeholder='Enter A Text' onChange={handleChange}></textarea>
            <button onClick={handleSubmit} type='submit'>Submit</button>

            {
                showresult && (
                    <>
                    <p>Wpm{wpm}</p>
                    <p>Character:{char}</p>
                    <p>Timer:{second}</p>
                    </>
                )
            }
        </div>
    );
}
