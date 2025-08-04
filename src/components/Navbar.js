import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/counter">Counter</Link>
            <br/>
            <Link to="/mul">Mul</Link>
            <br/>
            <Link to="/Todo1">Todo1</Link>
            <br/>
            <Link to="/Product">Product</Link>
            {/* <Link to></Link> */}

        </div>
    );
}
