import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from 'react-router-dom'

import { Box, Tab } from "@mui/material";
import { useState } from "react";
import Login from "./Login";
import PatientSignUp from "./PatientSignUp";
import DoctorSignUp from "./DoctorSignUp";
import docImg from '../registration.svg'
import '../App.css';

export default function TabListSwitch() {
	const [value, setValue] = useState(window.location.pathname);
	console.log(value)
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="contWrapper">
			<img src={docImg} alt="doc" className="registrationImg" />
			<div>
				<TabContext value={value} sx={{ display: 'flex', flexDirection: "column" }}>
					<Box sx={{ border: 1, borderColor: 'divider', width: 'fit-content' }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Login" value="/auth/login" component={Link} to="/auth/login" sx={{ width: '105px', border: '1px solid #F5F5F5' }} />
							<Tab label="Patient Sign Up" value="/auth/signup" component={Link} to="/auth/signup" sx={{ width: '160px', border: '1px solid #F5F5F5' }} />
							<Tab label="Doctor Sign Up " value="/auth/doctor-register" component={Link} to="/auth/doctor-register" sx={{ width: '166px', border: '1px solid #F5F5F5' }} />
						</TabList>
					</Box>
					<TabPanel value="/auth/login"><Login /></TabPanel>
					<TabPanel value="/auth/signup"><PatientSignUp handleChange={handleChange} /></TabPanel>
					<TabPanel value="/auth/doctor-register"><DoctorSignUp handleChange={handleChange} /></TabPanel>
				</TabContext>
			</div>
		</div>
	)
}