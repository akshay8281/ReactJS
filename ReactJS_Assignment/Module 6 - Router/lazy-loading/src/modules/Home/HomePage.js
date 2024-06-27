import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HomePage.css'; // Custom CSS for additional styling

const HomePage = () => (
    <div>
        {/* Hero Section */}
        <section className="hero-section text-white text-center bg-dark d-flex align-items-center justify-content-center">
            <div className="container">
                <h1 className="display-4">Welcome to SkyHigh Airlines</h1>
                <p className="lead">Experience the joy of flying with us!</p>
            </div>
        </section>

        {/* Flight Search Form */}
        <section className="flight-search-form py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="from" className="form-label">From</label>
                                    <input type="text" className="form-control" id="from" placeholder="Departure City" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="to" className="form-label">To</label>
                                    <input type="text" className="form-control" id="to" placeholder="Destination City" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="departure" className="form-label">Departure Date</label>
                                    <input type="date" className="form-control" id="departure" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="return" className="form-label">Return Date</label>
                                    <input type="date" className="form-control" id="return" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary w-100">Search Flights</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Featured Destinations */}
        <section className="featured-destinations py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Featured Destinations</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Destination 1" />
                            <div className="card-body">
                                <h5 className="card-title">Paris</h5>
                                <p className="card-text">The city of lights awaits you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://plus.unsplash.com/premium_photo-1681803606255-cb66b02f2b56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Destination 2" />
                            <div className="card-body">
                                <h5 className="card-title">New York</h5>
                                <p className="card-text">Explore the Big Apple.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://plus.unsplash.com/premium_photo-1668989820377-1b015acff2f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Destination 3" />
                            <div className="card-body">
                                <h5 className="card-title">Tokyo</h5>
                                <p className="card-text">Discover the heart of Japan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>© 2024 SkyHigh Airlines. All rights reserved.</p>
            </div>
        </footer>
    </div>
);

export default HomePage;
