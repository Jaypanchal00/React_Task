import { useEffect, useState } from 'react'
import Mul from './components/Mul';
import Counter from './components/Counter';
// import Counterf from './components/Counterf';
// import UserManagement from './components/UserManagement';
// import Useeffect from './components/Useeffect';
// import Fetch from './components/Fetch';
// import Userb from './components/Userb';
// import Todo1 from './components/Todo1';
import Navbar from './components/Navbar';
// import InputFocusExample from './components/InputFocusExample.js'
// import Form from './components/Form.js';
// import Timer from './components/Timer.js'
// import WithLoading from './components/WithLoading.js';
// import UserList from './components/UserList.js';
// const UserWihComp = WithLoading(UserList)
import { Routes, Route } from "react-router-dom"
import Todo1 from './components/Todo1';
import Product from './components/Product.jsx';
import Elec from './components/Elec.jsx';
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



      <Navbar />
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/mul' element={<Mul />} />
        <Route path='/Todo1' element={<Todo1 />} />
        <Route path='/Product' element={<Product />}>
          <Route path='elec' element={<Elec />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

