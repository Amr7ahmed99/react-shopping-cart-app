import React from 'react';
import { NavLink} from 'react-router-dom';
import '../../../css/navbar/Navbar.css';
const Navbar= ()=>{
    return (
        <nav>
            <div className='Navbar-Links'>
                <ul>
                    <li>
                        <NavLink to= '/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to= '/orders'>Orders</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;




