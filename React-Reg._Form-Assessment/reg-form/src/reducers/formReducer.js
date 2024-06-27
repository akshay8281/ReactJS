// reducers/formReducer.js
const initialState = {
    values: {
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
    },
    errors: {},
    isSubmitting: false,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_FORM_VALUES":
            return {
                ...state,
                values: { ...state.values, ...action.payload },
            };
        case "SET_FORM_ERRORS":
            return {
                ...state,
                errors: action.payload,
            };
        case "SET_IS_SUBMITTING":
            return {
                ...state,
                isSubmitting: action.payload,
            };
        case "RESET_FORM":
            return initialState;
        default:
            return state;
    }
};

export default formReducer;
