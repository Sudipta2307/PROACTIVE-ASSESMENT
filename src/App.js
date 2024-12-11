import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Lifestyle from './components/Lifestyle';

import DoctorLogin from './pages/DoctorLogin';
import DoctorSignup from './pages/DoctorSignup';
import PatientLogin from './pages/PatientLogin';
import PatientSignup from './pages/PatientSignup';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Define routes for the login and signup pages */}
                <Route path="/DoctorLogin" element={<DoctorLogin />} />
                <Route path="/DoctorSignup" element={<DoctorSignup />} />
                <Route path="/PatientLogin" element={<PatientLogin />} />
                <Route path="/PatientSignup" element={<PatientSignup />} />

                <Route path="/" element={
                    <>
                        <SearchBar />
                        <Lifestyle />
                    </>
                } />
            </Routes>
        </Router>
    );
};

export default App;
