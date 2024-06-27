// actions/formActions.js
export const updateFormValues = (values) => ({
    type: "UPDATE_FORM_VALUES",
    payload: values,
});

export const setFormErrors = (errors) => ({
    type: "SET_FORM_ERRORS",
    payload: errors,
});

export const setIsSubmitting = (isSubmitting) => ({
    type: "SET_IS_SUBMITTING",
    payload: isSubmitting,
});

export const resetForm = () => ({
    type: "RESET_FORM",
});
