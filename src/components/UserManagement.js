  import React, {useState} from "react";
  function UserManagement(){
    const[Products,setProducts]=useState([]);
    const[form,setForm]= useState({
      ProductName:'',
      description:'',
      Price:'',
      ProductImg:'',
      age:''
    });
    const[showModel,setShowModel]=useState(false);
    const[editIndex,seteditIndex]=useState(null)

    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!form.ProductName || !form.description || !form.Price || !form.ProductImg) {
        alert("Please Fill all fields ");
        return;
      }
      if(editIndex!==null){
        const updatedProducts  = [...Products]
        updatedProducts[editIndex]=form;
        setProducts(updatedProducts)
        seteditIndex(null)
      }else{
        setProducts([...Products,form])
      }
      setForm({
        ProductName:'',
        description:'',
        Price:'',
        ProductImg:'',
        age:''
      });
      setShowModel(false)
    };
const deleteProduct = (index)=>{
  const updated = [...Products];
  updated.splice(index,1);
  setProducts(updated)
}
const editUsers = (index)=>{
  setForm(Products[index])
  seteditIndex(index);
  setShowModel(true)

}
    return(
      <div className="user-management">
        <h2>Products Management</h2>
        <button className="open-model-btn" onClick={()=>setShowModel(true)}>Add Products</button>
        {showModel && (
          <div className="model-overlay">
            <div className="model-content">
              <h3>{editIndex!==null ? 'Edit User' : 'Add Product'}</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" name="ProductName" placeholder="Enter Product Name:" value={form.ProductName} onChange={handleChange} />
                <textarea name="description" value={form.description} onChange={handleChange}></textarea>
                <input type="text" name="ProductImg" placeholder="ProffileUrl" value={form.ProductImg}  onChange={handleChange}/>
                <input type="number" name="Price" placeholder="Price" value={form.Price} onChange={handleChange} />
                <div className="model-actions">
                <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
                    <button type="button" onClick={() => {
                  setShowModel(false);
                  seteditIndex(null);
                  setForm({ ProductImg: '', ProductName: '', description: '', Price: '' });
                }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
        <table border="1" cellPadding="10" style={{marginTop:'20px'}}>
          <thead>
            <tr>
              <th>ProductImg</th>
              <th>Product Name</th>
             <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {Products.length===0 ? (
              <tr><td colSpan="4">No Products Added</td></tr>
            ):(
              Products.map((products,index)=>(
                <tr key={index}>
                    <td><img src={products.ProductImg} alt="profile" width="50" height="50" style={{ borderRadius: "50%" }} /></td>

              <td>{products.ProductName}</td>
                  <td>{products.description}</td>
                  <td>{products.Price}</td>
                  <td>
                    <button onClick={() => deleteProduct(index)}>Delete</button>
                    <button onClick={()=> editUsers(index)}>Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }   
  export default UserManagement;
