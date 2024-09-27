import React, { useState } from 'react'
import { createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
    const id = Math.round(Math.random() * 100);


    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [tableData, setTableData] = useState([
        { id, name: "hman", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Shuja", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hassan", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hadi", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hanan", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Zaid", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Ali", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Bilal", title: "Senior developer", date: "thursday", task: "Debugging", status: "done" },
        { id, name: "Farooq", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hasham", title: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Fardeel", title: "Senior developer", date: "thursday", task: "Debugging", status: "done" },
    ]);
    const [links, setLinks] = useState([
        { link: "Admin panel" },
        { link: "User panel" },
        { link: "Help" },
        { link: "Contact" },
    ])
    const [adminAccess, setAdminAccess] = useState([
        { id, adminName: "Arshman", password: "Arsh#786", email: "Arsh@786" }
    ])
    return (
        <Context.Provider value={{ data, setData, tableData, setTableData, links, setLinks, searchData, setSearchData, adminAccess, setAdminAccess }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
export { Provider };