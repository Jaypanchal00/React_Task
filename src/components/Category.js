import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Category() {
    const [product, setProduct] = useState([]);
    const { category } = useParams()
    console.log(category)
    useEffect(() => {
        fetchApi()
    },[category])

    const fetchApi = async () => {
        const info = await axios.get(`http://localhost:5000/${category}`)
        setProduct(info.data);
    }
 return (
    <div>
      {product.map((el, i) => (
        <div key={i}>
          <Link to={`/${el.category}/${el.id}`}>
            <img src={el.img}  height={100}/>
          </Link>
          <h3>{el.price}</h3>
        </div>
      ))}
    </div>
  );
}

