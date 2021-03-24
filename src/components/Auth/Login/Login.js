import React, { useState } from 'react';
import ".//Login.css";


function Login({ validatePersonalData, setErrors, }) {
 // set Error before clicking submit

    const [values, setValues] = useState({});

    function onSubmitHandler(e) {
        e.preventDefault();
        setErrors([]);
        setValues({
            email: e.target.email.value,
            password: e.target.password.value
        })
        console.log(values);
        setErrors(validatePersonalData(values));
    }

return (
    <div className="login" onSubmit={onSubmitHandler}>
        <form className="log-in-container">
            <h1>Log in</h1>

            <label htmlFor="email" className="email-login">Email</label>
            <input type="email" name="email" className="email-login" defaultValue={values.email} />


            <label htmlFor="password" className="password-login">Password</label>
            <input type="password" name="password" required className="password-login" />


            <input type="submit" name="Submit" className="submit-login" />
        </form>
    </div>
)
}

export default Login;