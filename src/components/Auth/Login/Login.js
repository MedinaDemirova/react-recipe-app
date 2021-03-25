import React, { useState } from 'react';
import ".//Login.css";




function Login({ validatePersonalData, setErrors, logInDataBase }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = useState({});

    function emailHandler(e) { setEmail(e.target.value) };

    function passwordHandler(e) { setPassword(e.target.value) };

    function onSubmitHandler(e) {
        e.preventDefault();
        setValues({ email: email, password: password })
        console.log(values)
        let validationResult = validatePersonalData(values);
        console.log(validationResult.length)
        validationResult.length != 0 ?
            setErrors(validationResult) : logInDataBase(values.email, values.password)

    }





    return (
        <div className="login" onSubmit={onSubmitHandler}>
            <form className="log-in-container">
                <h1>Log in</h1>

                <label htmlFor="email" className="email-login">Email</label>
                <input type="email" name="email" className="email-login" required onChange={emailHandler} />


                <label htmlFor="password" className="password-login">Password</label>
                <input type="password" name="password" required className="password-login" onChange={passwordHandler} />

                <input type="submit" name="Submit" className="submit-login" />
            </form>
        </div>
    )
}

export default Login;