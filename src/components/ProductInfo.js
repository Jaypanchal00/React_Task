import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductInfo() {
     const [state, setState] = useState([]);
        const { category,id } = useParams()
        console.log(id)
        useEffect(() => {
            fetchApi()
        },[category,id])
    
        const fetchApi = async () => {
            const info = await axios.get(`http://localhost:5000/${category}/${id}`)
            setState(info.data);
        }
  return (
    <div>
      <img src={state.img} height={100}/>
        <h3>{state.price}</h3>
    </div>
  );
}
