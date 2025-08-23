import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Home1() {
    const[product, setProduct] = useState([]);
    useEffect(() => {
        fetchApi()
    },)
    const fetchApi = async () => {
        const info = await axios.get("http://localhost:5000/data")
        setProduct(info.data);
    }

  return (
    <div>
      {
        product.map((el,i)=>{
            return <>
            <Link to={`/${el.category}`}> <img src={el.img} height={100} /></Link>
            <h3>{el.price}</h3>
            <h3>{el.category}</h3>
            </>
        })
       }
      
    </div>
  );
}
