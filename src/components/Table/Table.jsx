import React, { useContext, useState } from 'react'
import Context from '../../context/Context';
import "./Table.css";
const Table = () => {
    const { tableData, searchData } = useContext(Context);
    return (
        <>
            <table>
                <thead>
                    <th><h2>Name</h2></th>
                    <th><h2>Title</h2></th>
                    <th><h2>Date</h2></th>
                    <th><h2>Task</h2></th>
                    <th><h2>Status</h2></th>
                </thead>
                <tbody>
                    {tableData.filter((item) => {
                        return searchData.toLowerCase() === " "
                            ? item
                            : item.name.toLowerCase().includes(searchData);
                    }).map((item) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.post}</td>
                                <td>{item.date}</td>
                                <td>{item.task}</td>
                                <td>{item.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table