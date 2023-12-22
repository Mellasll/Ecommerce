import React from "react";
import "../index.sass";
import { FaMailBulk } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Forgot = () => {
        return (
    <>
    <div className="Forgotcontainer">
        <form action="">
            <h1>Forgot Password</h1>

            <p>
            Please enter the mail address you'd like your password reset
            information sent to
            </p>

            <div className="input-box">
            <input type="text" placeholder="Email" required />
            <FaMailBulk className="icon" />
            </div>

            <div className="login-btn-group">
            <button>Request reset link</button>
            </div>

            <div className="login-custom">
            <h3>Back to</h3>
            <NavLink
                className={(isActive) => isActive && "link-login"}to="/login">
                Login here
            </NavLink>
            </div>

        </form>
    </div>
    </>
    );
};

export default Forgot;
