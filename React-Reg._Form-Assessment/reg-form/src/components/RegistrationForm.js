import React from "react";
import { connect } from "react-redux";
import useFormValidation from "./useFormValidation";
import validate from "./validate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css"
import {
    updateFormValues,
    setFormErrors,
    setIsSubmitting,
} from "../actions/formAction"; // Adjust the path if necessary

const RegistrationForm = ({
    values,
    errors,
    isSubmitting,
    updateFormValues,
    setFormErrors,
    setIsSubmitting,
}) => {
    const { handleChange, handleSubmit } = useFormValidation(values, updateFormValues, errors, setFormErrors, isSubmitting, setIsSubmitting, validate);

    const handleCancel = () => {
        updateFormValues({
            email: "",
            password: "",
            retypePassword: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            town: "",
            region: "",
            passcode: "",
            country: "",
        });
        setFormErrors({});
    };

    return (
        <div className="container my-5 d-flex align-items-center justify-content-center">
            <div className="row justify-content-center w-100">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <form onSubmit={handleSubmit} className="p-4 myForm shadow">
                        <h3 className="text-center text-dark head-1">Register Here</h3>
                        <h1 className="text-center my-4 head-2">USER REGISTRATION</h1>
                        <h5 className="text-center mb-4">Fields marked <span className="text-danger">*</span> are required</h5>
                        <div className="form-group row mb-3">
                            <label htmlFor="email" className="col-sm-4 col-form-label">Email ID<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="password" className="col-sm-4 col-form-label">Password<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                                {errors.password && <p className="text-danger">{errors.password}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="retypePassword" className="col-sm-4 col-form-label">Repeat Password<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="retypePassword"
                                    value={values.retypePassword}
                                    onChange={handleChange}
                                    placeholder="Repeat Password"
                                    required
                                />
                                {errors.retypePassword && <p className="text-danger">{errors.retypePassword}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                />
                                {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                />
                                {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">Phone Number<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                />
                                {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="address" className="col-sm-4 col-form-label">Address<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    required
                                />
                                {errors.address && <p className="text-danger">{errors.address}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="town" className="col-sm-4 col-form-label">Town<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="town"
                                    value={values.town}
                                    onChange={handleChange}
                                    placeholder="Town"
                                    required
                                />
                                {errors.town && <p className="text-danger">{errors.town}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="region" className="col-sm-4 col-form-label">Region<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="region"
                                    value={values.region}
                                    onChange={handleChange}
                                    placeholder="Region"
                                    required
                                />
                                {errors.region && <p className="text-danger">{errors.region}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="passcode" className="col-sm-4 col-form-label">Passcode/ZIP<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="passcode"
                                    value={values.passcode}
                                    onChange={handleChange}
                                    placeholder="Passcode/ZIP"
                                    required
                                />
                                {errors.passcode && <p className="text-danger">{errors.passcode}</p>}
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="country" className="col-sm-4 col-form-label">Country<span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="country"
                                    value={values.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    required
                                />
                                {errors.country && <p className="text-danger">{errors.country}</p>}
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-8 offset-sm-4 py-4">
                                <button type="submit" className="btn btn-primary me-4 btn1" disabled={isSubmitting}>Register</button>
                                <button type="button" className="btn btn-secondary btn2" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    values: state.form.values,
    errors: state.form.errors,
    isSubmitting: state.form.isSubmitting,
});

const mapDispatchToProps = {
    updateFormValues,
    setFormErrors,
    setIsSubmitting,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
