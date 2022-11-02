import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
const Register = () => {
    const [errors, setErrors] = useState(null)
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password.length < 6) {

            setErrors('Please have at least 6 Character Password')

            return;
        }
        if (password !== confirm) {
            setErrors('Your password did not match')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                console.log(user)

            })
            .catch(error => console.error('error:', error))
    }
    return (
        <div>

            <div className='form-container'>

                <h1 className='form-tittle'>Register</h1>
                <form onSubmit={handleRegister} >
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm"> Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                </form>
                <p className='toggle-register-link'>Already have an account <Link to="/login">Login</Link></p>
                <span>{errors}</span>

            </div>

        </div>
    );
};

export default Register;