import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const HomePage = lazy(() => import('./modules/Home/HomePage'));
const AdminLayout = lazy(() => import('./modules/Admin/AdminLayout'));
const Dashboard = lazy(() => import('./modules/Admin/Dashboard'));
const Users = lazy(() => import('./modules/Admin/Users'));

const App = () => (
  <Router>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
