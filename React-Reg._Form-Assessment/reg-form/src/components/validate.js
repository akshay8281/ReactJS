// validate.js

const validate = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(values.password)) {
        errors.password = "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character";
    }

    if (!values.retypePassword) {
        errors.retypePassword = "Retype Password is required";
    } else if (values.password !== values.retypePassword) {
        errors.retypePassword = "Passwords do not match";
    }

    if (!values.firstName) {
        errors.firstName = "First Name is required";
    }

    if (!values.lastName) {
        errors.lastName = "Last Name is required";
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = "Phone Number must be 10 digits";
    }

    if (!values.address) {
        errors.address = "Address is required";
    }

    if (!values.town) {
        errors.town = "Town is required";
    }

    if (!values.region) {
        errors.region = "Region is required";
    }

    if (!values.passcode) {
        errors.passcode = "Passcode/ZIP is required";
    } else if (!/^\d{6}$/.test(values.passcode)) {
        errors.passcode = "Passcode/ZIP must be 6 digits";
    }

    if (!values.country) {
        errors.country = "Country is required";
    }

    return errors;
};

export default validate;
