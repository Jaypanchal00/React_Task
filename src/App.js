// import { useEffect, useState } from 'react'
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
// // const UserWihComp = WithLoading(UserList)
// import { Routes, Route } from "react-router-dom";
// // import Todo1 from './components/Todo1';
// import Product from './components/Product.jsx';
// import Elec from './components/Elec.jsx';
// import Home from './components/Home.js';
// import Api from './components/Api.jsx';
// import Navbar from './components/Navbar.js';
// import Elec from './components/Elec.jsx';
// import ProductDetail from './components/ProductDetail.jsx';
// import Home1 from './components/Home1.js';
// import Category from './components/Category.js';
// import ProductInfo from './components/ProductInfo.js';
// import AAA from './components/AAA.js';
// import Get from './components/Get.js'
// import Todi from "./components/Redux/Todi";
// import Display from "./components/Redux/Display";
import RCounter from "./components/Redux/RCounter"

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


<RCounter/>
      {/* <Home/> */}
      {/* <Api/> */}
      {/* <AAA/> */}
      {/* <Get/> */}
     {/* <Todi/>
     <Display/> */}
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


// import { useContext, useState } from "react";
// import { UserProvider, UserContext } from "./components/UserCon";
// import Navbar from "./components/Navbar";
// import SignUp from "./components/SignUp";
// import Login from "./components/Login";
// import "./App.css"; 
// import Homee from "./components/Homee";

// function AppContent() {
//   const { user } = useContext(UserContext);
//   const [showLogin, setShowLogin] = useState(false);

//   if (user) {
//     return (
//       <>
//         <Navbar />
//         <Homee/>
//       </>
//     );
//   }

//   return (
//     <div>
//       {showLogin ? (
//         <Login setShowLogin={setShowLogin} />
//       ) : (
//         <SignUp setShowLogin={setShowLogin} />
//       )}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <UserProvider>
//       <AppContent />
//     </UserProvider>
//   );
// }


