import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../App.css';

import axios from 'axios';
import { FormControl } from '@mui/material';


export default function Login() {

    const initialValues = { email: '', password: '', strategy: 'local' };
    const [formValues, setFormValues] = React.useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formValues);
    }
    const handleChange = (event) => {
        // console.log(event.target)
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const loginUser = (iData) => {
        console.log(iData);
        axios.post('http://my-doctors.net:8090/authentication', {
            email: iData.email,
            password: iData.password,
            strategy: 'local'
        })
            .then(response => {
                alert('success');
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
                autoComplete="off"
            >
                <div className='wrapper1'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email or Mobile Number"
                        type="email"
                        name='email'
                        onChange={handleChange}
                        value={formValues.email}
                    />

                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />

                    <Stack className='btn' direction="row" spacing={18}>
                        <Button type="submit" variant="contained">Login</Button>

                        <a href='/forgot'>forgot password </a>
                    </Stack>
                    <div className='line'>
                        <h4>Don't have an account?</h4>
                        <a href='/sign up'>Sign Up </a></div>
                </div>


            </Box>
        </FormControl>
    );
}