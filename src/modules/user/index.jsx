import React from "react";
import { Outlet } from "react-router-dom";

const User = () =>{
    return(
        <div>
            <h1>ECOMMERCE</h1>
            <button>giriş yap</button>
            <Outlet/>
        </div>
    )
}
export default User;