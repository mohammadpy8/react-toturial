const validate = (state) => {

    const errors = {};
    
    if (!state.name.trim()) {
        errors.name = "username required";
    } else {
        delete errors.name;
    }

    if (!state.email) {
        errors.email = "email required"
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        errors.email = "email adderss is invalid";
    } else {
        delete errors.email;
    };

    if (!state.password) {
        errors.password = "password required";
    } else if (state.password.length > 6) {
        errors.password = "password great than 6 characters";
    } else {
        delete errors.password;
    }

    if (!state.confirmPassword) {
        errors.confirmPassword = "confirm the password";
    } else if (state.confirmPassword !== state.password) {
        errors.confirmPassword = "password do not match";
    } else {
        delete errors.confirmPassword;
    }

    if (state.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "acceted is role ok :)"
    }

    return errors;

};


export default validate;