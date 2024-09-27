import React, { useContext, useState } from 'react';
import "./SearchBar.css";
import Context from '../../context/Context';


const SearchBar = () => {
    const { setSearchData } = useContext(Context);
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    setSearchData(searchValue.toLowerCase());
    return (
        <>
            <div className='search-bar-container flex-box '>
                <div className="input-border flex-box">
                    <input className='search-bar' value={searchValue} onChange={handleChange} placeholder='search name' type="text" />
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchBar