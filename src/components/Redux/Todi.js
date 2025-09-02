import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { myAction } from './Action';

export default function Todi() {
    const [state, setstate] = useState("")
    const dispatch = useDispatch()

    function addtext(e) {
        setstate(e.target.value)
        
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(myAction(state))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={addtext} />
                <input type="submit" />
            </form>

        </div>
    );
}
