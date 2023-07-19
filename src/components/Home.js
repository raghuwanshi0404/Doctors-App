import React from 'react'
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Banner from '../banner.svg';
import Bonemarrow from '../bone marrow.svg';
import anesth from '../anesthesiology.svg';
import cardiac from '../cardiac surgery.svg';
import ent from '../e.n.t.svg';
import cosmetology from '../cosmetology.svg';
import clinical from '../clinical nutrition & dietetics.svg';
import '../App.css';
import Box from '@mui/material/Box';
import '@fontsource/roboto/500.css';
import Typography from '@mui/material/Typography';

import CardContent   from '@mui/material/CardContent';


export default function Home() {
	return (

		<>
			<Box sx={{ width: "100vw", height: "40%" }}>
				<img src={Banner} className="bannerImg" alt="logo" />
			</Box>
			<Typography variant="h3" gutterBottom sx={{ p: 2, color: "#3f51b5" }}>
				20+ Specialities
			</Typography>

			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

				<CardContent  className="cards" >
					<img src={Bonemarrow} className="boneImg" alt="logo" />

					<Typography variant="body2" sx={{ color: 'black', mt: 2, fontSize: "20px" }}>
						Bone Marrow
					</Typography>
				</CardContent  >



				<CardContent  className="cards" >
					<img src={anesth} className="boneImg" alt="logo" />

					<Typography variant="body2" sx={{ color: 'black', mt: 2, fontSize: "20px" }}>
						Anesthesiology
					</Typography>
				</CardContent  >



				<CardContent  className="cards" >
					<img src={cardiac} className="boneImg" alt="logo" />

					<Typography variant="body2" sx={{ color: 'black', mt: 2, fontSize: "20px" }}>
					Cardiac Surgery
					</Typography>
				</CardContent>

				<CardContent  className="cards" >
					<img src={ent} className="boneImg" alt="logo" />

					<Typography variant="body2" sx={{ color: 'black', mt: 2, fontSize: "20px" }}>
					E.N.T
					</Typography>
				</CardContent>



				<CardContent  className="cards" >
					<img src={cosmetology} className="boneImg" alt="logo" />

					<Typography variant="body2" sx={{ color: 'black', mt: 2, fontSize: "20px" }}>
						Cosmetology
					</Typography>
				</CardContent>

				<CardContent  className="cards" >
					<img src={clinical} className="boneImg" alt="logo" />

					<Typography variant="body2" sx={{ color: 'black', mt: 2, fontSize: "20px" }}>
					Clinical Nutrition & Dietetics
					</Typography>
				</CardContent>
			</Box>

		</>



	)
}
// sx={{border: '1px solid lightgrey', width: '330px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 5, mx: 4 }}>