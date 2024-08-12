import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills/Skills";
import Resume from "./pages/resume"
 
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const trackingId = process.env.REACT_APP_TRACKING_ID;
if (trackingId) {
    ReactGA.initialize(trackingId);
}

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <br />
                <ScrollToTop />
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
