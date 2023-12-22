import React from 'react';
import { FaLock, FaMailBulk } from "react-icons/fa";
import '../index.sass'
import { NavLink } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <div className='Logincontainer'>
                <form action="">
                    <h1>Login</h1>

                    <div className='input-box'>
                        <input type='text' placeholder='Email' required />
                        <FaMailBulk className='icon'/>
                    
                        <input type="password" placeholder=" Password" required />
                        <FaLock className='icon'/>
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox'/>Remember me</label>
                        <NavLink to='/forgot'>Forgot password?</NavLink>
                    </div>

                    <div className='login-btn-group'>
                        <button type='submit'>Login</button>
                    </div>

                    <div className='register-custom'>
                        <h4>Don't have an account?</h4>
                        <NavLink className={(isActive)=> isActive && 'link-register'} to="/register">Register</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;