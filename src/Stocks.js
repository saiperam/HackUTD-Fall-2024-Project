import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stockImage from './assets/stocks.png';


const Stocks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [monthsToHold, setMonthsToHold] = useState('');  // State to hold user input
    const [stocksData, setStocksData] = useState([]);  // State to store the stock predictions
    const [error, setError] = useState('');  // State to hold error messages
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // Handle user input change for months to hold stock
    const handleMonthsChange = (e) => {
        setMonthsToHold(e.target.value);
    };
    // Handle the "Analyze" button click to store the input value
    const handleAnalyze = () => {
        console.log('Simulating analysis for months:', monthsToHold);
    
        // Simulate a delay to mock a network request
        setTimeout(() => {
            if (!monthsToHold) {
                setError('Please enter the number of months.');
                setStocksData([]);
                return;
            }
    
            // Mocked response data
            const mockData = [
                {
                    Symbol: 'AAPL',
                    'Current Price': 150.23,
                    'Predicted Price': 155.32,
                    'Percent Differential (%)': 3.4,
                    MSE: 0.012,
                },
                {
                    Symbol: 'GOOGL',
                    'Current Price': 2700.12,
                    'Predicted Price': 2725.50,
                    'Percent Differential (%)': 0.95,
                    MSE: 0.002,
                },
            ];
    
            // Set the mocked data to state
            setError('');
            setStocksData(mockData);
        }, 1000); // Simulated delay of 1 second
    };
    

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
            {/* Hamburger Menu Icon */}
            <div
                onClick={toggleMenu}
                style={{
                    width: 40,
                    height: 30,
                    position: 'fixed', // Always visible
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
                            toggleMenu(); // Close menu after click
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

            {/* Main Layout */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* Quad Core Box */}
                <div
                    style={{
                        width: 357,
                        height: 320,
                        left: 102,
                        top: 62,
                        position: 'absolute',
                        background: '#7399C6',
                        borderRadius: 20,
                    }}
                />

                {/* Quad Core Text */}
                <div
                    style={{
                        width: 267,
                        height: 226,
                        left: 134,
                        top: 62,
                        position: 'absolute',
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

                {/* Stock Predictor Box */}
                <div
                    style={{
                        width: 610.67,
                        height: 643,
                        left: 527,
                        top: 61,
                        position: 'absolute',
                        background: 'black',
                        borderRadius: 20,
                    }}
                />
                {/* Number of Months Section */}
                <div
                    style={{
                        width: 347,
                        height: 288,
                        left: 112,
                        top: 416,
                        position: 'absolute',
                        background: '#7399C6',
                        borderRadius: 20,
                    }}
                />
                <div
                    style={{
                        width: 297,
                        height: 115,
                        left: 137,
                        top: 442,
                        position: 'absolute',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 36,
                        fontFamily: 'Abhaya Libre',
                        fontWeight: '400',
                        wordWrap: 'break-word',
                    }}
                >
                Number of Months to Hold Stock:
                </div>

                {/* Input box for the user to enter the number of months */}
                <input
                    type="number"
                    value={monthsToHold}
                    onChange={handleMonthsChange}
                    placeholder="Enter months"
                    style={{
                        width: 203,
                        height: 40,
                        left: 179,
                        top: 560,
                        position: 'absolute',
                        background: 'white',
                        borderRadius: 10,
                        fontSize: 18,
                        paddingLeft: 10,
                    }}
                />

                {/* Analyze Button */}
                <button
                    onClick={handleAnalyze}
                    style={{
                        width: 160,
                        height: 40,
                        left: 179,
                        top: 610,
                        position: 'absolute',
                        background: '#7399C6',
                        borderRadius: 10,
                        fontSize: 18,
                        color: 'white',
                    }}
                >
                    Analyze
                </button>

               
                
                </div>
              {/* Image */}
            <img
                src={stockImage}
                alt="Stock Predictor"
                style={{
                    position: 'absolute', // Ensures it's positioned relative to the parent
                    top: '250px', // Center vertically
                    left: '56%', // Center horizontally
                    transform: 'translate(-50%, -50%)', // Adjust for perfect centering
                    width: '35%', // Adjust the size as needed
                    zIndex: 3000, // Bring it to the front
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Optional shadow for better visibility
                }}
            />
        </div>
    );
};

export default Stocks;
