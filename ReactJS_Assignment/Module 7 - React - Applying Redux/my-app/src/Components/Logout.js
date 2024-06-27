import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Features/userSlice';
import './Logout.css';

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <form className='fluid-container d-flex flex-column justify-content-center align-items-center text-center bg-success vh-100'>
            <div className='logout-container'>
                <h1 className='welcome'>Welcome <span className='userName'>{user.name}</span>!</h1>
                <button className='logout_btn' onClick={handleLogout}>Logout</button>
            </div>
        </form>
    );
};

export default Logout;
