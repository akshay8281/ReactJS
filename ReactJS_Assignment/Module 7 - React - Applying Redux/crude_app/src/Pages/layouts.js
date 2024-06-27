import React from "react";
import { Link } from "react-router-dom";
import "./layouts.css"

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-center ">
                <Link className="navbar-brand" to="/">CRUD APP</Link>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-center w-100">
                        <li className="nav-item mx-4">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
