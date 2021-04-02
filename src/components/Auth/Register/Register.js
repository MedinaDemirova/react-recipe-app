import React, { useState } from 'react';
import ".//Register.css";
import { Link } from "react-router-dom";
import { auth } from '../../../firebase';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    async function signUpWithEmailAndPasswordHandler(e, email, password, repassword) {
        e.preventDefault();
        console.log(password)
        console.log(repassword)
        if (password === repassword && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            try {
                let user = await auth.createUserWithEmailAndPassword(email, password);
                //localStorage.setItem("user", user.user.refreshToken);
                //localStorage.setItem("email", user.user.email);
                //setUser({ email: user.user.email, token: user.user.refreshToken });
                console.log(user)
            } catch (err) {
                setError(err.message)
            }
        } else {
             setError("Valid email and password required!")
        }
    };

    function emailHandler(e) { setEmail(e.target.value) };
    function passwordHandler(e) { setPassword(e.target.value) };
    function rePasswordHandler(e) { setRePassword(e.target.value) };

    function checkIfPasswordsMatches(password, repassword) { if (password !== repassword) return setError("Passwords must matches!") };
    function validateEmail(email) { if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return setError("Invaid email!") };


    return (
        <div className="login" >

            <form className="log-in-container">
                {error !== null && <div className="auth-error">{error}</div>}

                <label htmlFor="email" className="email-login">Email</label>
                <input
                    type="email"
                    name="email"
                    className="email-login"
                    required
                    onChange={emailHandler}
                    onBlur={validateEmail}
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

                <label htmlFor="repassword" className="password-login">Repeat password</label>
                <input
                    type="password"
                    name="repassword"
                    required
                    className="password-login"
                    value={repassword}
                    placeholder="Repeat Password"
                    onChange={rePasswordHandler}
                    onBlur={checkIfPasswordsMatches} />


                <button
                    type="submit"
                    name="Submit"
                    className="submit-login"
                    onClick={(event) => { signUpWithEmailAndPasswordHandler(event, email, password, repassword) }}>
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