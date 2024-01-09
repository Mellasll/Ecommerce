import React, { useState } from 'react';
import { FaLock, FaMailBulk } from 'react-icons/fa';
import '../index.sass';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data); // Log the entire data object
            
                if (data && data.access_token) {
                    // Store the access token in local storage
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                    // Handle successful login here, e.g., set user session, redirect, etc.
                    console.log('Login successful');
                } else {
                    console.error('Access token not found in response');
                }
            } else {
                // Handle login error, show error message, etc.
                console.error('Login failed');
                alert('Your email address and/or password is incorrect.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    return (
        <>
            <div className="Logincontainer">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaMailBulk className="icon" />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <NavLink to="/forgot">Forgot password?</NavLink>
                    </div>

                    <div className="login-btn-group">
                        <button type="submit">Login</button>
                    </div>

                    <div className="register-custom">
                        <h4>Don't have an account?</h4>
                        <NavLink className={(isActive) => isActive && 'link-register'} to="/register">
                            Register
                        </NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;