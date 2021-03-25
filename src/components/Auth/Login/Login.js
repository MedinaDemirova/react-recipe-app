import React, { useState } from 'react';
import ".//Login.css";
import { Link } from "react-router-dom";



function Login({ validatePersonalData, setErrors, logInDataBase }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const signInWithEmailAndPasswordHandler = (e, email, password) => { e.preventDefault() };

    function emailHandler(e) { setEmail(e.target.value) };

    function passwordHandler(e) { setPassword(e.target.value) };



    return (
        <div className="login" >

            {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

            <form className="log-in-container">
                <h1>Log in</h1>

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
                    Submit
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