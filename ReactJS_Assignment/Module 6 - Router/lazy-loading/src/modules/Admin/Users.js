import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Manage Users</h2>
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td><span className="badge bg-success">Active</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm me-2">View</button>
                            <button className="btn btn-warning btn-sm me-2">Edit</button>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jane Smith</td>
                        <td>jane.smith@example.com</td>
                        <td><span className="badge bg-warning">Pending</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm me-2">View</button>
                            <button className="btn btn-warning btn-sm me-2">Edit</button>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mike Johnson</td>
                        <td>mike.johnson@example.com</td>
                        <td><span className="badge bg-danger">Inactive</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm me-2">View</button>
                            <button className="btn btn-warning btn-sm me-2">Edit</button>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Users;
