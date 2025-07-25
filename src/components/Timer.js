import React, { useEffect, useRef, useState } from 'react';

export default function Speed() {
    const [text, setText] = useState('');
    const [wpm, setwpm] = useState(0)
    const [second, setsecond] = useState(0)
    const [showResult, setShowresult] = useState(false)
    const timer = useRef(null)


    function handlechange(e) {
        setText(e.target.value);
        if (!timer.current) {
            timer.current = setInterval(() => {
                setsecond(s => s + 1)
            }, 1000)
        }
    };

    const handleSubmit = () => {
        clearInterval(timer.current)
        timer.current = null
        setShowresult(true)
    }
    setTimeout(() => {
        setShowresult(false)
        setText('')
    }, 5000);

useEffect(() => {
    const words = text.trim().split().length;
    if (second > 0) {
        setwpm(Math.round((words / second) * 60))
    }
})
const char = text.replace(/\s/g, '').length;



return (
    <div>
        <textarea value={text} onChange={handlechange} placeholder='Enter A Text' ></textarea>
        <button onClick={handleSubmit} type='submit' >Submit</button>
        {showResult && (
            <>
                <p>Wpm:{wpm}</p>
                <p>Character:{char}</p>
                <p>Time:{second}</p>
            </>
        )}
    </div>
);
}
