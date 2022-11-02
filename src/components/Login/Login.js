import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
    const { LogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LogIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                navigate(from, { replace: true })
            })

            .catch(error => console.error('Error:', error))


    }
    return (
        <div className='form-container'>
            <h1 className='form-tittle'>Login</h1>
            <form onSubmit={handleLogIn}>
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