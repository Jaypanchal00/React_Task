import { useEffect, useState } from 'react'
// import Mul from './components/Mul';
// import Counter from './components/Counter';
// import Counterf from './components/Counterf';
// import UserManagement from './components/UserManagement';
// import Useeffect from './components/Useeffect';
// import Fetch from './components/Fetch';
// import Userb from './components/Userb';
// import Todo1 from './components/Todo1';
// import Navbar from './components/Navbar';
// import InputFocusExample from './components/InputFocusExample.js'
// import Form from './components/Form.js';
// import Timer from './components/Timer.js'
// import WithLoading from './components/WithLoading.js';
// import UserList from './components/UserList.js';
// const UserWihComp = WithLoading(UserList)
import { Routes, Route } from "react-router-dom";
import Todo1 from './components/Todo1';
import Product from './components/Product.jsx';
// import Elec from './components/Elec.jsx';
// import Home from './components/Home.js';
import Api from './components/Api.jsx';
import Navbar from './components/Navbar.js';
import Elec from './components/Elec.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Home1 from './components/Home1.js';
import Category from './components/Category.js';
import ProductInfo from './components/ProductInfo.js';
// import Get from './components/Get.js';
function App() {
  // const [Loading, setLoading] = useState(true)
  // const [user, setUser] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUser([
  //       {
  //         id: 1, name: "sun"
  //       },
  //       {
  //         id: 2, name: "Anu"
  //       },
  //       {
  //         id:3,
  //         name:"kk"
  //       }
  //     ])
  //     setLoading(false)
  //   }, 2000)
  // }, [])
  return (
    <div>

      {/* <Mul />
      <hr />
      <Counter />
      <hr />
      <Counterf />
      <hr /> */}
      {/* <Useeffect/>
      <Fetch/> */}
      {/* <UserManagement/> */}
      {/* <Userb/> */}
      {/* <Todo1/> */}
      {/* <InputFocusExample/> */}
      {/* <Form/> */}
      {/* <Timer/> */}
      {/* <UserWihComp isLoading={Loading} user={user} /> */}




      {/* <Home/> */}
      <Api/>
      {/* <Get/> */}
     
       {/* <Navbar /> */}
       
      {/* <Routes>
         <Route path="/Product" element={<Product />}>
       
          <Route path="Elec" element={<Elec />} />
        </Route>
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>  */}

      {/* <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path= "/:category" element={<Category/>} />
        <Route path="/:category/:id" element={<ProductInfo />} />

      </Routes> */}
      
    </div>
  );
}

export default App;

