import React, { useContext, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "./Admin.css";
import Context from '../../context/Context';

const Admin = () => {
    const { tableData, setTableData } = useContext(Context);
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('');
    const [filter, setFilter] = useState('');
    const handleAddData = (event) => {
        event.preventDefault();
        setTableData([
            ...tableData,
            { name: name, post: post, date: date, task: task, status: status }
        ]);
        setName(" ");
        setPost(" ");
        setDate(" ");
        setTask(" ");
        setStatus(" ");
    }
    const handleDeleteData = (event) => {
        event.preventDefault();
        const filtered = tableData.filter((item) => {
            return item.name.toLowerCase() !== name.toLowerCase();
        })
        setTableData(filtered);
        setName(" ");
        setPost(" ");
        setDate(" ");
        setTask(" ");
        setStatus(" ");
    }
    return (
        <>
            <div className="admin-container">
                <div className="admin-side-bar">
                    <SideBar value="Admin Panel" />
                </div>
                <div className="admin-remaining-container">
                    <div className="admin-para-container">
                        <p className='admin-para'>Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Veniam beatae perferendis
                            repellendus aperiam vitae officia
                            labore quam commodi ipsam vero?
                        </p>
                        <p className='admin-para'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Blanditiis,
                            laborum voluptate dolore veritatis adipisci praesentium.
                        </p>
                    </div>
                    <div className="admin-logo-container">
                        <span class="material-symbols-outlined">
                            admin_panel_settings
                        </span>
                    </div>
                    <div className="admin-form-container">
                        <form className='admin form'>
                            <h2 className='admin-form-label'>Username</h2>
                            <input value={name} onChange={(e) => setName(e.target.value)} className='admin-form-input' type="text" />
                            <h2 className='admin-form-label'>Post</h2>
                            <input value={post} onChange={(e) => setPost(e.target.value)} className='admin-form-input' type="text" />
                            <h2 className='admin-form-label'>Date</h2>
                            <input value={date} onChange={(e) => setDate(e.target.value)} className='admin-form-input' type="text" />
                            <h2 className='admin-form-label'>Task</h2>
                            <input value={task} onChange={(e) => setTask(e.target.value)} className='admin-form-input' type="text" />
                            <h2 className='admin-form-label'>Status</h2>
                            <input value={status} onChange={(e) => setStatus(e.target.value)} className='admin-form-input' type="text" />
                            <div className="admin-btn-container">
                                <button className='admin-add-btn' onClick={handleAddData}>Add</button>
                                <button className='admin-add-btn' onClick={handleDeleteData}>Delete</button>
                            </div>
                        </form>
                    </div>
                    <div className="admin-remaining-para-container">
                        <p className='remaining-questions'>Click on Add?</p>
                        <p className='admin-answer-para'>Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Ad quod earum rem laudantium modi
                            tempora, labore reprehenderit non quisquam accusantium, dicta
                            omnis ullam maiores atque aliquam autem reiciendis? Similique
                            nostrum repellat provident alias Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Ad quod earum rem laudantium modi
                            tempora,
                            iure suscipit aliquid, voluptatum molestiae dolorem explicabo.</p>
                        <p className='remaining-questions'>Click on Delete?</p>
                        <p className='admin-answer-para'>Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit.Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Ad quod earum rem laudantium modi
                            tempora, Labore laborum dicta enim. Tempore
                            molestiae ratione, rerum consequuntur facilis tempora repellat
                            ullam omnis
                            ducimus repellendus, nihil sapiente fuga. Laborum, doloribus harum.</p>
                        <p className='remaining-questions'>Warning</p>
                        <p className='admin-answer-para'>Lorem ipsum dolor sit amet cons
                            ctetur adipisicing elit. Ab a iste porro rerum di
                            gnissimos quo nesciunt commodi cupiditate consequuntur
                            consequatur!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin