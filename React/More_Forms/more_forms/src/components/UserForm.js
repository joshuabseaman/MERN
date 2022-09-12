import React, { useState } from 'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First name must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last name must be 3 characters or longer!");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Password is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Password must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("password must be 3 characters or longer!");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return(
        <div className="UserForm">
            <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h3>Your Form Data</h3>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </div>
    );
};

export default UserForm;
