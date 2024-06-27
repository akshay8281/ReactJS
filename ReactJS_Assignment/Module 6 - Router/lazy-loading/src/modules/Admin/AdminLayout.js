import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminLayout.css'; // Custom CSS for additional styling

const AdminLayout = () => (
    <div className="admin-layout">
        <div className="d-flex">
            {/* Sidebar */}
            <nav id="sidebar" className="bg-dark text-white p-3">
                <div className="sidebar-header">
                    <h3>SkyHigh Airlines Admin</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/admin/dashboard" className="text-white">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="text-white">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/flights" className="text-white">Flights</Link>
                    </li>
                    <li>
                        <Link to="/admin/bookings" className="text-white">Bookings</Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className="text-white">Settings</Link>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div id="content" className="p-4">
                <Outlet />
            </div>
        </div>
    </div>
);

export default AdminLayout;
