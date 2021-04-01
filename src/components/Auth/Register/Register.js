import React, { useState } from 'react';
import ".//Register.css";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const signIUpWithEmailAndPasswordHandler = (e, email, password) => { e.preventDefault() };

    function emailHandler(e) { setEmail(e.target.value) };

    function passwordHandler(e) { setPassword(e.target.value) };

    function rePasswordHandler(e) {setRePassword(e.target.value)};


    return (
        <div className="login" >

            {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

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

                <label htmlFor="re-password" className="password-login">Password</label>
                <input
                    type="password"
                    name="re-password"
                    required
                    className="password-login"
                    value={repassword}
                    placeholder="Repeat Password"
                    onChange={rePasswordHandler} />    

                <button
                    type="submit"
                    name="Submit"
                    className="submit-login"
                    onClick={(event) => { signIUpWithEmailAndPasswordHandler(event, email, password) }}>
                    Register
                        </button>

                <br />
                <p className="login-p">
                    <br />
                    Already have an account? <Link to="/auth/login" className="register-link">
                        Sign in here
              </Link>
                </p>




            </form>


        </div>
    )
}


export default Register