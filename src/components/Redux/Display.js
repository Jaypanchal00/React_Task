import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, editAction } from './Action';

export default function Display() {
    const data = useSelector((store) => { return store })
    const dispatch = useDispatch()

    function handledit(i) {
        const newValue = prompt("Enter ANrw Value")
        if(newValue){
            dispatch(editAction(i,newValue))
        }
    }
    function handledel (i){
        dispatch(deleteAction(i))

    }
    return (
        <div>
            {
                data.map((el,i) => {
                    return <>
                        <li>{el}</li>
                        
                        <button onClick={()=>{handledit(i)}}>Edit</button>
                         
                        <button onClick={()=>{handledel(i)}}>Delete</button>

                    </>
                })
            }

        </div>
    );
}
