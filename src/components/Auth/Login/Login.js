import React, { useState } from 'react';
import ".//Login.css";
import { Link } from "react-router-dom";
import { auth } from '../../../firebase';
import { validatePersonalData } from "../../../services/validator";


function Login({ setUser }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = async (e, email, password) => {
        e.preventDefault();
        if (validatePersonalData(email, password)) {
            try {
                let user = await auth.signInWithEmailAndPassword(email, password);
                localStorage.setItem("user", user.user.refreshToken);
                localStorage.setItem("email", user.user.email);
                setUser({ email: user.user.email, token: user.user.refreshToken });

            } catch (err) {
                setError(err.message)
            }
        } else {
            setError("Valid email and password required")
        }
    };

    function emailHandler(e) { setEmail(e.target.value) };
    function passwordHandler(e) { setPassword(e.target.value) };

    return (
        <div className="login" >

            <form className="log-in-container">

                <label htmlFor="email" className="email-login">Email</label>
                <input
                    type="email"
                    name="email"
                    className="email-login"
                    required
                    onChange={emailHandler}
                    value={email}
                    placeholder="E.g: faruq123@gmail.com" />

                <label htmlFor="password" className="password-login">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    className="password-login"
                    value={password}
                    placeholder="Your Password"
                    onChange={passwordHandler} />

                <button
                    type="submit"
                    name="Submit"
                    className="submit-login"
                    onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                    Sign in
                    </button>

                <br />
                <p className="login-p">
                    <br />
                    Don't have an account? <Link to="/auth/register" className="register-link">
                        Sign up here
          </Link>
                </p>




            </form>


        </div>
    )
}

export default Login;