import React, { useState } from 'react'
import "./User.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import SideBar from '../../components/SideBar/SideBar';
import Table from '../../components/Table/Table';

const User = () => {
    return (
        <>
            <div className='user-panel-main-container'>
                <SearchBar />
                <div className="components-container">
                    <div className="sidebar-container">
                        <SideBar value="User Panel" />
                    </div>
                    <div className="table-container">
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default User