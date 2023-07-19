 export const validate = async (name, value, errorObj) => {
    let errors = {...errorObj};
    
    switch (name) {
        case 'username' : {
            if (value === '') {
                errors.username = "Username is required!";
            } else {
                errors.username = '';
            }
            break;
        }
        case 'email' : {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value === '') {
                errors.email = "Email is required!";
            } else if (!regex.test(value)) {
                errors.email = "This is not a valid email format!";
            } else if (regex.test(value)) {
                errors.email =  await validateUsingAPI('e', value);
            } else {
                errors.email = '';
            }
            break;
        }
        case 'mobilenumber' : {
            if (value === '') {
                errors.mobilenumber = "Mobile Number is required";
            } else if (value.length !== 10) {
                errors.mobilenumber = "Enter a valid Mobile Number"
            } else if (value.length === 10) {
                errors.mobilenumber = await validateUsingAPI('m', value);
            } else {
                errors.mobilenumber = '';
            }
            break;
        }
        case 'password' : {
            if (value === '') {
                errors.password = "Password is required";
            } else {
                errors.password = '';
            }
            break;
        }
        case 'confirmpassword' : {
            if (value === '') {
                errors.confirmpassword = "Confirm Password is required";
            } else {
                errors.confirmpassword = '';
            }
            break;
        }
        default: 
    }
    // if (name === 'username' && value === '') {
    //     errors.username = "Username is required!";
    // } else {
    //     errors.username = "";
    // }

    // if (name === 'email' && value === '') {
    //     errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //     errors.email = "This is not a valid email format!";
    // }

    // if (!values.mobilenumber) {
    //     errors.mobilenumber = "Mobile Number is required"
    // } else if (values.mobilenumber.length !== 10) {
    //     errors.mobilenumber = "Enter a valid Mobile Number"
    // }

    // if (!values.password) {
    //     errors.password = "Password is required!";
    // } else if (values.password.length < 6) {
    //     errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 16) {
    //     errors.password = "Password cannot be more than 16 characters";
    // }
    return errors;
}

async function validateUsingAPI (iCategory, value) {
    let url = `http://my-doctors.net:8090/accounts?${iCategory === 'm' ? 'contactNumber': 'email'}=${value}`;
    let _message = '';
    try {
        const response = await fetch(url);
        if (response && response.status === 433) {
            
            const body = await response.json();
            _message = body.message;
        }
    }
    catch (err) {
        _message = err.message;
    }   
    
    return _message;
}