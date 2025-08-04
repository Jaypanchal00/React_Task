import React, { useEffect, useState } from 'react';
import axios from "axios"
export default function Api() {
    const [text,setText]=useState({
        id:"",
        name:"",
        price:""
        
    })
   const [product,setProduct]=useState([])

useEffect(()=>{
fetchApi()
},[])

   const fetchApi=async()=>{
      const info=await axios.get("http://localhost:3000/product")
      setProduct(info.data)
   }

   function AddText(e){
        setText({...text,[e.target.name]:e.target.value})
   }


 const handleSubmit=async()=>{
   const info= await axios.post("http://localhost:3000/product",text)
   setProduct(info)
 }

  return (
    <div>
      <h1>Api</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter id' name="id" value={text.id} onChange={AddText}/>
        <input type="text" placeholder='enter name' name="name"  value={text.name} onChange={AddText}/>
        <input type="text" placeholder='enter price' name="price" value={text.price} onChange={AddText} />
        <input type="submit" />
      </form>




      {
        product.map((el,i)=>{
            return <li>{el.name}</li>
        })
      }
    </div>
  );
}
