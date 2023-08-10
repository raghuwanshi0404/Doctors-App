import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import TabListSwitch from './components/TabListSwitch';
import Home from './components/Home';
import Login from './components/Login';
import PatientSignUp from './components/PatientSignUp';
import DoctorSignUp from './components/DoctorSignUp';

// import Login from './components/Login';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="Doctors-App/" element={<Home />} />
				<Route path="/auth" element={<TabListSwitch />}>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<PatientSignUp />} />
					<Route path="doctor-register" element={<DoctorSignUp />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
