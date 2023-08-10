import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

import logo from '../headerlogo.svg';
import './Header.css';
import { Typography } from '@mui/material';

function Header() {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{backgroundColor: 'white'}} position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<img src={logo} className="App-logo" alt="logo" sx={{ width: '150px' , height:'45px'  }} />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						MyDoctor
					</Typography>
					<Link to="/auth/login">	<Button className='' sx={{ backgroundColor: '#3f51b5', color:'white' }}>Login</Button></Link>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header;