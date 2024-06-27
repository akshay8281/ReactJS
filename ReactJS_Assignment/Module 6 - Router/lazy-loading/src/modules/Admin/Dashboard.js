import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Admin Dashboard</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Flights</div>
                    <div className="card-body">
                        <h5 className="card-title">Manage Flights</h5>
                        <p className="card-text">Add, edit, or remove flights.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">Bookings</div>
                    <div className="card-body">
                        <h5 className="card-title">View Bookings</h5>
                        <p className="card-text">Monitor current bookings and check statuses.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">Passengers</div>
                    <div className="card-body">
                        <h5 className="card-title">Manage Passengers</h5>
                        <p className="card-text">View and manage passenger information.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="card mb-3">
                    <div className="card-header">Recent Bookings</div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Booking 1 - Flight to Paris</li>
                            <li className="list-group-item">Booking 2 - Flight to New York</li>
                            <li className="list-group-item">Booking 3 - Flight to Tokyo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card mb-3">
                    <div className="card-header">Recent Passenger Registrations</div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">John Doe - Paris</li>
                            <li className="list-group-item">Jane Smith - New York</li>
                            <li className="list-group-item">Mike Johnson - Tokyo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
