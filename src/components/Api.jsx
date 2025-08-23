import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [text, settext] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [product, setProduct] = useState([]);
  const [edit, seteditId] = useState(false);
  const [search, setsearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); 

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const info = await axios.get("http://localhost:5000/data", {
      params: { name: search },
    });
    setProduct(info.data);
  };

  function addtext(e) {
    settext({ ...text, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      await axios.put(`http://localhost:5000/data/${edit}`, text);
      seteditId(null);
    } else {
      await axios.post("http://localhost:5000/data", text);
    }
    settext({
      id: "",
      name: "",
      price: "",
    });
    fetchApi();
  };

  const handleEdit = (item) => {
    settext(item);
    seteditId(item.id);
  };

  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:5000/data/${item}`);
    fetchApi();
  };

 
  const sortedProducts = [...product].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return Number(a.price) - Number(b.price);
    } else if (sortOrder === "highToLow") {
      return Number(b.price) - Number(a.price);
    }
  });

  return (
    <div>
      <h1>Fetch Api</h1>

    
      <input
        type="text"
        placeholder="Search By Name"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button type="button" onClick={fetchApi}>Search</button>

      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="">Sort By Price</option>
        <option value="lowToHigh">Low To high</option>
        <option value="highToLow">High To Low</option>
      </select>

    
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={text.id}
          onChange={addtext}
          placeholder="Enter A id"
        />
        <input
          type="text"
          name="name"
          value={text.name}
          onChange={addtext}
          placeholder="Enter A name"
        />
        <input
          type="text"
          name="price"
          value={text.price}
          onChange={addtext}
          placeholder="Enter A Price"
        />
        <input type="submit" value={edit ? "Update" : "Add"} />
      </form>

      <ul>
        {sortedProducts.map((el) => (
          <li key={el.id}>
            {el.id}- {el.name} - {el.price}{" "}
            <button onClick={() => handleEdit(el)}>Edit</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
