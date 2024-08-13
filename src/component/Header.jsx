import React from 'react';
import '../assets/header.css';

function Header(props) {
    return (
        <div className='header'>
            <h3>{new Date().toDateString()}</h3>
            <h2>Todo List</h2>
        </div>
    );
}

export default Header;