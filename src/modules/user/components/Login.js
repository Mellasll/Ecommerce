import React from 'react';
import { FaUser,FaLock } from "react-icons/fa";
import '../index.sass'

const Login = () => {

    return (
        <>
            <div className='Logincontainer'>
                <form action="">
                    <h1>Login</h1>

                    <div className='input-box'>
                        <input type='text' placeholder='Email' required />
                        <FaUser className='icon'/>
                    </div>

                    <div className='input-box'>
                        <input type="password" placeholder=" Password" required />
                        <FaLock className='icon'/>
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox'/>Remember me</label>
                       
                    </div>

                    <div className='login-btn-group'>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;