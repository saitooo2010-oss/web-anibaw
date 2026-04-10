import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login () {
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form">
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>        
        </div>
    )
}

export default Login;