import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../App.css';
import axios from 'axios';
import PasswordValidator from './PasswordValidator';
import { validate } from '../util' 


export default function PatientSignUp(props) {

    const initialValues = { username: '', email: '', password: '', confirmpassword: '', mobilenumber: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({
        username : '',
        email: '',
        mobilenumber: '',
        password: '',
        confirmpassword: ''
    });
    const [formTouched, setFormTouched] = useState({
        username : false,
        email: false,
        mobilenumber: false,
        password: false,
        confirmpassword: false
    })

    const [isFormDirty, setIsFormDirty] = useState(false);

    const [passwordValid, setPasswordValid] = useState(false);
    
    const isFormValid = () => {
        return Object.values(formErrors).every((error) => error === '')  && isFormTouched() && passwordValid;
    }

    const isFormTouched = () => {
        return Object.values(formTouched).every((touched) => touched)
    }

    const handlePasswordValidtor = (iObj) => {
        setPasswordValid(Object.values(iObj).every((item) => item === 3))
    }
    
    const handleChange = async (event) => {
        // console.log(event.target)
        const { name, value } = event.target;
        setIsFormDirty(true);
        setFormTouched({...formTouched, [name]: true});
        let _formErrors = await validate(name, value, formErrors);
        setFormErrors(_formErrors);
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    useEffect(() => {
        // let _isFormValid = false;
        // if (isFormDirty && formErrors && Object.keys(formErrors).length === 0) {
        //     console.log(formErrors);
        //     _isFormValid = true;
        //     // setIsSubmit(true);
        // }
    }, [formErrors, isFormDirty])


    const handleSubmit = (e) => {
        e.preventDefault();
        // registerUser(formValues);
        let _formErrors = validate(formValues);
        setFormErrors(_formErrors);
        if (Object.keys(_formErrors).length === 0) {
            console.log(formErrors);

            console.log(formValues);
            registerUser(formValues);
        }
    }

    const registerUser = (iData) => {
        console.log(iData);
        axios.post('http://my-doctors.net:8090/patients', {
            contactNumber: iData.mobilenumber,
            email: iData.email,
            firstName: iData.username,
            gender: "male",
            password: iData.password
        })
            .then(response => {
                props.handleChange(null, '/auth/login');
            }).catch(error => {
                console.error('There was an error!', error);
                console.log(error.response.data.message)
            });
    }
    
    return (
        <FormControl onSubmit={handleSubmit}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch', height: '10ch' },
                }}
                noValidate
                autoComplete="off">
                <div className='wrapper1'>
                    <h3>Create an account</h3>
                    <div>
                        <label>Full Name</label>
                        <TextField
                            required
                            id="outlined-required"
                            label="Enter Name"
                            type="text"
                            name='username'
                            value={formValues.username}
                            onBlur={handleChange}
                            onChange={handleChange} />
                        <p>{formErrors.username}</p>
                    </div>
                    <div className='radoGrp'>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup className='rado' sx={{ flexDirection: 'row' }}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>

                    </div>
                    <div sx={{ flexDirection: 'column' }}>
                        <FormLabel id="demo-radio-buttons-group-label">Date of birth</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Enter your Date of birth" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div>
                        <FormLabel id="demo-radio-buttons-group-label">Enter Mobile number</FormLabel>

                        <TextField
                            required
                            id="outlined-required"
                            label="Mobile Number"
                            type="number"
                            name='mobilenumber'
                            value={formValues.mobilenumber}
                            onBlur={handleChange}
                            onChange={handleChange}
                        />
                        <p>{formErrors.mobilenumber}</p>
                    </div>
                    <div>
                        <FormLabel id="demo-radio-buttons-group-label">Enter Email</FormLabel>
                        <TextField
                            required
                            id="outlined-required"
                            label=" Enter your Email"
                            type="email"
                            name='email'
                            value={formValues.email}
                            onBlur={handleChange}
                            onChange={handleChange}
                        />
                        <p>{formErrors.email}</p>
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label=" Create Password"
                            autoComplete="current-password"
                            name='password'
                            value={formValues.password}
                            onBlur={handleChange}
                            onChange={handleChange}
                        />
                        <p>{formErrors.password}</p>
                       
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label=" confirm Password"
                            autoComplete="current-password"
                            name='confirmpassword'
                            value={formValues.confirmpassword}
                            onBlur={handleChange}
                            onChange={handleChange}
                        />
                        <p>{formErrors.confirmpassword}</p>
                    </div>
                    <PasswordValidator 
                        checkPasswordValidations={handlePasswordValidtor}
                        password={formValues.password} 
                        confirmpassword={formValues.confirmpassword}
                    />

                    <Stack className='btn' direction="row" spacing={18}>
                        <Button type="submit" disabled={!isFormValid()} variant="contained">Register</Button>

                        <a href='/forgot'>forgot password </a>
                    </Stack>
                    <div className='line'>
                        <h4>Already have an account?</h4>
                        <a href='/sign up'>Sign In </a></div>
                </div>
            </Box>
        </FormControl>
    );
} 
