import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div>

                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button className='log-out-btn' onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to="/login">Log In</Link>
                            < Link to="/register">Register</Link>

                        </>
                }


                <span>{user?.email}</span>

            </div>
        </nav >
    );
};

export default Header;