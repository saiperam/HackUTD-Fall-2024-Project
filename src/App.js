import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Login from './Login'; // Default page
import Credit from './Credit'; // Credit.js
import Budget from './Budget'; // Budget.js
import BudgetGraph from './Budget_Graph'; // Budget_Graph.js (with correct case)

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default Login Page */}
        <Route path="/" element={<Login />} />

        {/* Credit Page */}
        <Route path="/credit" element={<Credit />} />

        {/* Budget Page */}
        <Route path="/budget" element={<Budget />} />

        {/* Budget Graph Page */}
        <Route path="/budget_graph" element={<BudgetGraph />} />
      </Routes>
    </Router>
  );
};

export default App;
