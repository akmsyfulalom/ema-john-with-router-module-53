import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-tittle'>Register</h1>
                <form >
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm"> Confirm Password</label>
                        <input type="password" name="confirm" id="" placeholder="confirm password" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                </form>
                <p className='toggle-register-link'>Already have an account <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;