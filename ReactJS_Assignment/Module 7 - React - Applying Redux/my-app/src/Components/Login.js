import React, { useState } from "react";
import { login, logout } from "../Features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );

        setEmail("");
        setPassword("");
    };


    return (
        <div className='login fluid-container d-flex flex-columnd-flex justify-content-center align-items-center flex-column text-center bg-success vh-100'>
            <form className='bg-warning p-5 rounded-5' onSubmit={(e) => handleSubmit(e)}>
                <h2 className='mb-5 fw-bolder'>Login System</h2>
                <div className='input-group mb-4'>
                    <input
                        type='name'
                        placeholder='Name'
                        className='form-control'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-default'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className='input-group mb-4'>
                    <input
                        type='email'
                        placeholder='Username'
                        className='form-control'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-default'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className='input-group mb-4'>
                    <input
                        type='password'
                        placeholder='Password'
                        className='form-control'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-default'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary submit_btn px-4 fs-6 fw-bolder rounded-3'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
