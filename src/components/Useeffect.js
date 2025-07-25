import React,{useEffect,useState} from 'react';
export default function Useeffect(){
    const[state,setState]=useState("https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D")
    useEffect(()=>{
        console.log("Mount Phase")
        return()=>{
            alert("Unmount")
        }
    },[])
    return(
        <div>
            <img src={state}/>
            <button onClick={()=>{setState("https://w0.peakpx.com/wallpaper/415/344/HD-wallpaper-curves-bg-wp-abstract.jpg")}}>Update</button>
        </div>
    )
}

