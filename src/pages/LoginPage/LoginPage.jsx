import React, { useContext, useState } from 'react';
import "./LoginPage.css";
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
const LoginPage = () => {
    const { data, setData } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userExist, setUserExist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        data.map((item) => {
            if (name === item.name && password === item.password) {
                navigate("/User");
            }
            else {
                setUserExist("User doesn't exist")
            }
        })
    }


    return (
        <>
            <div className='sign-up-container flex-box'>
                <div className='logo-container'>
                    <div className="login-page-logo">
                        <span class="material-symbols-outlined">key</span>
                    </div>
                    <div className="login-heading">
                        <h2>Login here</h2>
                    </div>
                </div>
                <div className="login-content-container">
                    <div className="login-form-border">
                        <form onSubmit={handleSubmit} action="" className='login-form'>
                            <h2 className='label'>Username</h2>
                            <input className='login-input' value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                            <h2 className='label'>Password</h2>
                            <input className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <SubmitButton type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="login-errors-container">
                        <h2 className='login-error-description'>{userExist}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage