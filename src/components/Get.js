import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Get() {
    const [text, settext] = useState({
        name: "",
        price: ""
    })
    const [Product, setproduct] = useState([])

    const fetchApi = async () => {
        const res = await axios.get("http://localhost:5000/product")
        setproduct(res.data)
    }


    function addtext(e) {
        settext({ ...text, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/product", text)
        settext({
            name: "",
            price: ""
            
        })
        fetchApi()
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={text.name} placeholder='Enter A Name:' onChange={addtext} />
                <input type="text" name="price" value={text.price} placeholder='Enter A Price' onChange={addtext} />
                <input type="submit"/>
            </form>

            <ul>
                {Product.map((el)=>(
                    <li key={el.id}>
                        {el.name} - {el.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
