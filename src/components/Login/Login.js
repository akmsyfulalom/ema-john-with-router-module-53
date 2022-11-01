import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-tittle'>Login</h1>
            <form >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='toggle-register-link'>New to ema-john <Link to="/register">Create a new account</Link></p>
        </div>
    );
};

export default Login;