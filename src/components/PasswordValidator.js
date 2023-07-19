import Icon from '@mui/material/Icon';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

import React, { useEffect, useState } from 'react'

function CheckedUnchecked(props) {
    return (
        <>
            {
                props.iconValue === 1 ? <RadioButtonUncheckedIcon /> 
                    : (props.iconValue === 2 ? <AddCircleOutlineTwoToneIcon />: <CheckCircleOutlineIcon />)
            }
        </>
    )
}

function PasswordValidator(props) {
 
    const [iconObj, setIconObj] = useState({
        lowerCase: 1,
        upperCase: 1,
        specialCharacter : 1, 
        atleastNumber: 1,
        atleastSixChar: 1,
        passwordMatch: 3,
    });

    useEffect(() => {
        let _passwordValidation = {
            lowerCase: /[a-z]/.test(props.password) ? 3 : 2,
            upperCase: /[A-Z]/.test(props.password) ? 3 : 2,
            specialCharacter : /[!@#$%^&*(),.?":{}|<>]/.test(props.password) ? 3 : 2,
            atleastNumber: /\d/.test(props.password) ? 3 : 2,
            atleastSixChar: props.password.length > 5 ? 3 : 2,
            passwordMatch: props.confirmpassword === props.password ? 3 : 2
        }
        props.checkPasswordValidations(_passwordValidation);
        setIconObj({..._passwordValidation});

    }, [props.password, props.confirmpassword]);

    return (
        <>
            {
                props.password
                && props.password.length > 0
                && 
                <div>
                    <p>
                        <CheckedUnchecked iconValue = {iconObj.lowerCase}/>
                        Must contain lowercase letter
                    </p>
                    <p>
                        <CheckedUnchecked iconValue = {iconObj.upperCase} />
                        Must contain uppercase letter
                    </p>
                    <p>
                        <CheckedUnchecked iconValue = {iconObj.specialCharacter} />
                        Must contain at least one special letter
                    </p>
                    <p>
                        <CheckedUnchecked iconValue = {iconObj.atleastNumber} />
                        Must contain at least one number
                    </p>
                    <p>
                        <CheckedUnchecked iconValue = {iconObj.atleastSixChar} />
                        Must contain at least 6 characters
                    </p>
                    <p>
                        <CheckedUnchecked iconValue = {iconObj.passwordMatch} />
                        password Must  match
                    </p>
                </div>


            }
        </>

    )
}

export default PasswordValidator;