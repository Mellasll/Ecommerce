import React from 'react';
import { FaUser,FaLock, FaMailBulk} from "react-icons/fa";
import '../index.sass'
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
        <div className='Registercontainer'>
            <form action="">
                <h1>Register</h1>

                <div className='input-box'>
                <input type='text' placeholder='Full Name' required />
                    <FaUser className='icon'/>

                    <input type='text' placeholder='Email' required />
                    <FaMailBulk className='icon'/>

                    <input type="password" placeholder=" Password" required />
                    <FaLock className='icon'/>

                    <input type="password" placeholder="Confirm Password" required />
                    <FaLock className='icon'/>
                </div>

                <div className='login-btn-group'>
                    <button type='submit'>Register</button>
                </div>
                
                <div className='login-custom'>
                    <h4>Already have an account?</h4> 
                    <NavLink className={(isActive)=> isActive && 'link-login'} to="/login">Login</NavLink>
                </div>
            </form>
        </div>
    </>
);
}

export default Register