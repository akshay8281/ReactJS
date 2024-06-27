import { useState, useEffect } from "react";

const useFormValidation = (initialValues, validate) => {
    // State for form values
    const [values, setValues] = useState(initialValues);
    // State for form errors
    const [errors, setErrors] = useState({});
    // State for form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Function to update form values
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
        // Validate the field on change and update the errors state
        setErrors(validate({ ...values, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    };

    // Effect to handle form submission after validation
    useEffect(() => {
        if (isSubmitting) {
            // Check if there are no errors
            if (Object.keys(errors).length === 0) {
                console.log("Form submitted successfully:", values);
                // Reset form values and submission status
                setValues(initialValues);
                setIsSubmitting(false);
            } else {
                // If there are errors, reset submission status
                setIsSubmitting(false);
            }
        }
    }, [errors, initialValues, isSubmitting, values]);

    // Return the handleChange and handleSubmit functions, along with the form values and errors
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};

export default useFormValidation;
