import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import graphImage from './assets/budgetgraph.png'; // Import your image

const BudgetGraph = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // React Router navigation hook

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
            {/* Hamburger Menu Icon */}
            <div
                onClick={toggleMenu}
                style={{
                    width: 40,
                    height: 30,
                    position: 'fixed',
                    left: 20,
                    top: 20,
                    cursor: 'pointer',
                    zIndex: 2000,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'white',
                    padding: '5px',
                    borderRadius: '5px',
                }}
            >
                <div style={{ width: '100%', height: 4, backgroundColor: 'black' }} />
                <div style={{ width: '100%', height: 4, backgroundColor: 'black' }} />
                <div style={{ width: '100%', height: 4, backgroundColor: 'black' }} />
            </div>

            {/* Slide-out Hamburger Menu */}
            <div
                style={{
                    width: isMenuOpen ? '200px' : '0',
                    height: '100%',
                    backgroundColor: 'black',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1500,
                    overflowX: 'hidden',
                    transition: 'width 0.3s ease',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Exit Button */}
                {isMenuOpen && (
                    <button
                        onClick={toggleMenu}
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: -50,
                            cursor: 'pointer',
                            fontSize: 18,
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '50%',
                            width: 30,
                            height: 30,
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        X
                    </button>
                )}

                {/* Menu Items */}
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: '20px',
                        marginTop: '60px',
                        textAlign: 'left',
                        fontSize: 20,
                        fontFamily: 'Abhaya Libre',
                        cursor: 'pointer',
                    }}
                >
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Login'); // Placeholder route for Home.js
                        }}
                    >
                        Home
                    </li>
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Budget'); // Placeholder route for BudgetAdvisor.js
                        }}
                    >
                        Budget Advisor
                    </li>
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Fraud'); // Placeholder route for SecurityMonitor.js
                        }}
                    >
                        Security Monitor
                    </li>
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Stocks'); // Placeholder route for StockPredictor.js
                        }}
                    >
                        Stock Predictor
                    </li>
                </ul>
            </div>

            {/* Header Section */}
            <div
                style={{
                    width: 1150,
                    height: 188,
                    left: '50%',
                    top: 51,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    background: '#7399C6',
                    borderRadius: 20,
                }}
            />
            <div
                style={{
                    width: 1047,
                    height: 154,
                    left: '50%',
                    top: 61,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 96,
                    fontFamily: 'Jomolhari',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                }}
            >
                Quad Core
            </div>

            {/* Image in Center */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 250,
                }}
            >
                <img
                    src={graphImage}
                    alt="Graph Placeholder"
                    style={{
                        width: '600px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
        </div>
    );
};

export default BudgetGraph;
