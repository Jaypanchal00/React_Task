import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function Userb() {
  const [show, setShow] = useState(false);
  const [Product, setProduct] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [FormData, setFormData] = useState({
    ProductName: '',
    Price: '',
    Category: '',
    email: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setEditIndex(null);
    setFormData({
      ProductName: '',
      Price: '',
      Category: '',
      email: '',
      image: '',
      description: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!FormData.ProductName || !FormData.Price || !FormData.Category || !FormData.email) {
    //   alert("Please fill all fields");
    //   return;
    // }

    if (editIndex !== null) {
      const updatedProducts = [...Product];
      updatedProducts[editIndex] = FormData;
      setProduct(updatedProducts);
    } else {
      setProduct([...Product, FormData]);
    }

    handleClose();
  };

  const deleteProduct = (index) => {
    const updated = [...Product];
    updated.splice(index, 1);
    setProduct(updated);
  };

  const editUsers = (index) => {
    setFormData(Product[index]);
    setEditIndex(index);
    setShow(true);
  };

return (
  <>
    <Button variant="primary" onClick={handleShow}>Add Product</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editIndex !== null ? 'Edit Product' : 'Add Product'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
                 <Form.Label>Product Name</Form.Label>
                 <br/>
            <input type="text" name="ProductName" id="" placeholder='Enter Product Name'    value={FormData.ProductName}   onChange={handleChange}/>
            <br/>

             <Form.Label>Product Price</Form.Label>
                 <br/>
            <input type="text" name="Price" placeholder='Enter Product Price'   value={FormData.Price}   onChange={handleChange}/>

          

            
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {editIndex !== null ? 'Update' : 'Save'}
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default Userb;
