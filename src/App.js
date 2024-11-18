import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Credit from './Credit';
import Budget from './Budget';
import BudgetGraph from './Budget_Graph';
import Fraud from './Fraud';
import Stocks from './Stocks';
//import myImage from './assets/HackLogo-removebg-preview (1).png';


const App = () => {
    return (
        
        <Router>
            <Routes>
                {/* Define all routes here */}
                <Route path="/" element={<Login />} />
                <Route path="/Credit" element={<Credit />} />
                <Route path="/Budget" element={<Budget />} />
                <Route path="/Budget_Graph" element={<BudgetGraph />} />
                <Route path="/Fraud" element={<Fraud />} />
                <Route path="/Stocks" element={<Stocks />} />
            </Routes>
        </Router>
    );
};

export default App;
