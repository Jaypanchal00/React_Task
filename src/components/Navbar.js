// import React from 'react';
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <div>
//             <Link to="/counter">Counter</Link>
//             <br/>
//             <Link to="/mul">Mul</Link>
//             <br/>
//             <Link to="/Todo1">Todo1</Link>
//             <br/>
//             <Link to="/Product">Product</Link>

//         </div>
//     );
// }


import { useContext } from "react";
import { UserContext } from "./UserCon";
import "./Navbar.css";   
export default function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <span className="logo">Login Form</span>
      {user ? (
            <span className="user-info">
             <i className="fa-solid fa-user"></i>



           {user.name} ({user.email})
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </span>
      ) : (
        <span>Please Login</span>
      )}
    </nav>
  );
}
