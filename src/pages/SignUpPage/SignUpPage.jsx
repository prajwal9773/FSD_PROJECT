import React, { useContext, useState } from 'react';
import "./SignUpPage.css";
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
const SignUpPage = () => {
    const { data, setData } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailExists, setEmailExists] = useState('');
    const [passwordExists, setPasswordExists] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailExists = data.some(item => item.email === email);
        const isPasswordMatch = password === confirmPassword;

        if (isEmailExists) {
            setEmailExists("Email already exists");
        } else if (!isPasswordMatch) {
            setPasswordExists("Password doesn't match");
        } else {
            setData([
                ...data,
                { name, email, password }
            ]);
            navigate("/User");
        }

    }
    // setData([
    //     ...data,
    //     { name, email, password }
    // ])
    // data.map((item) => {
    //     if (email !== item.email && password === confirmPassword) {
    //         navigate("/User")
    //     }
    //     else if (email === item.email) {
    //         setEmailExists("Email already exists");
    //     }
    //     else if (password !== confirmPassword) {
    //         setPasswordExists("Password doesn't match");
    //     }
    //     else {
    //         navigate("/User");
    //     }
    // })
    const handleClick = () => {
        navigate("/User/Login");
    }
    return (
        <>
            <div className='sign-up-container flex-box'>
                <div className='nav-bar'>
                    <p className='sign-up-para label'>Sign up or</p><button className='login-btn' onClick={handleClick}>Login</button>
                </div>
                <div className="content-container">
                    <div className="form-border">
                        <form onSubmit={handleSubmit} action="" className='sign-up-form'>
                            <h2 className='label'>Username</h2>
                            <input className='sign-up-input' value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                            <h2 className='label'>Email</h2>
                            <input className='sign-up-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                            <h2 className='label'>Password</h2>
                            <input className='sign-up-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <h2 className='label'>Confirm Password</h2>
                            <input className='sign-up-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required />
                            <SubmitButton type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="errors-container">
                        <h2 className='error-description'>{emailExists}</h2>
                        <h2 className='error-description'>{passwordExists}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage