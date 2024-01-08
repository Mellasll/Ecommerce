import React, { useState } from 'react';
import { FaUser, FaLock, FaMailBulk } from "react-icons/fa";
import '../index.sass';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            // Şifreler eşleşiyorsa kayıt işlemini gerçekleştir
            console.log('Kayıt başarılı');
            setError('');
        } else {
            // Şifreler eşleşmiyorsa hata mesajı göster
            setError('Passwords do not match');
        }
    };

    return (
        <>
            <div className='Registercontainer'>
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>

                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            required
                        />
                        <FaUser className='icon' />

                        <input
                            type='text'
                            placeholder='Email'
                            required
                        />
                        <FaMailBulk className='icon' />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className='icon' />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    <br/>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className='login-btn-group'>
                        <button type='submit'>Register</button>
                    </div>

                    <div className='login-custom'>
                        <h4>Already have an account?</h4>
                        <NavLink className={(isActive) => isActive && 'link-login'} to="/login">Login</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;