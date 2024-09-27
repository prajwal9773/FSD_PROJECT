import React, { useState } from 'react'
import "./AdminAccessPage.css";
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import { useContext } from 'react';

const AdminAccessPage = () => {
    const { adminAccess, setAdminAccess } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [invalidInput, setInvalidinput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        adminAccess.map((item) => {
            if (item.adminName == name && item.password === password && item.email === email) {
                navigate("/Admin");
            }
            else {
                setInvalidinput("Invalid input");
            }
        })
    }

    return (
        <>
            <div className='admin-access-container flex-box'>
                <div className='admin-logo-container'>
                    <div className="admin-access-logo">
                        <span class="material-symbols-outlined">shield_person</span>
                    </div>
                    <div className="admin-access-heading">
                        <h2>Admin Login</h2>
                    </div>
                </div>
                <div className="admin-access-content-container">
                    <div className="admin-access-form-border">
                        <form onSubmit={handleSubmit} action="" className='admin-access-form'>
                            <h2 className='label'>Admin name</h2>
                            <input className='admin-access-input' value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                            <h2 className='label'>Password</h2>
                            <input className='admin-access-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <h2 className='label'>Email</h2>
                            <input className='admin-access-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                            <div className="admin-checkbox-container">
                                <input type="checkbox" className='checkbox-input' required /><p className='checkbox-para'>Remember me</p>
                            </div>
                            <div className='checkbox-description'>
                                <p>Check the box to ensure the given info is authentic.</p>
                            </div>
                            <SubmitButton type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="admin-access-errors-container">
                        <h2 className='admin-access-error-description'>{invalidInput}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAccessPage