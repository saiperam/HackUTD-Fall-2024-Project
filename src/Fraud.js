import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Fraud = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

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
                            toggleMenu();
                            navigate('/Login');
                        }}
                    >
                        Home
                    </li>
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Budget');
                        }}
                    >
                        Budget Advisor
                    </li>
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Fraud');
                        }}
                    >
                        Security Monitor
                    </li>
                    <li
                        style={{ padding: '10px 0' }}
                        onClick={() => {
                            toggleMenu();
                            navigate('/Stocks');
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
                        width: 199,
                        height: 197,
                        left: 101,
                        top: 51,
                        position: 'absolute',
                        background: '#7399C6',
                        borderRadius: 20,
                    }}
                />

                {/* Quad Core Text */}
                <div
                    style={{
                        width: 188,
                        height: 154,
                        left: 100,
                        top: 80,
                        position: 'absolute',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 48,
                        fontFamily: 'Jomolhari',
                        fontWeight: '400',
                        wordWrap: 'break-word',
                    }}
                >
                    Quad Core
                </div>

                {/* Fraud Detected Banner */}
                <div
                    style={{
                        width: 852,
                        height: 192,
                        left: 359,
                        top: 52,
                        position: 'absolute',
                        background: 'rgba(255, 0, 0, 0.77)',
                        borderRadius: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            color: 'white',
                            fontSize: 70,
                            fontFamily: 'Jomolhari',
                            fontWeight: '400',
                        }}
                    >
                        Security Monitor
                    </div>
                </div>

                {/* Black Section */}
                <div
                    style={{
                        width: 1116,
                        height: 404,
                        left: 101,
                        top: 287,
                        position: 'absolute',
                        background: 'black',
                        borderRadius: 20,
                        padding: '20px', // Add padding to the black box
                    }}
                >
                    {/* Text Content Inside Black Box */}
                    <div
                        style={{
                            color: 'lightgreen',
                            fontWeight: 'bold',
                            fontSize: 20,
                            textAlign: 'center',
                            top: 500,
                        }}
                    >
                        Transaction 1 status: No Suspicious Activity Detected!
                    </div>

                    <div
                        style={{
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Transaction 2 status: Flagged for Suspicion!
                    </div>

                    <div
                        style={{
                            color: 'lightgreen',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Transaction 3 status: No Suspicious Activity Detected!
                    </div>

                    <div
                        style={{
                            color: 'lightgreen',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Transaction 4 status: No Suspicious Activity Detected!
                    </div>

                    <div
                        style={{
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Transaction 5 status: Flagged for Suspicion!
                    </div>

                    <div
                        style={{
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Transaction 6 status: Flagged for Suspicion!
                    </div>

                    <div
                        style={{
                            color: 'lightgreen',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Transaction 7 status: No Suspicious Activity Detected!
                    </div>

                    {/* Dots Section */}
                    <div
                        style={{
                            color: 'white',
                            marginTop: '20px',
                            textAlign: 'center',
                        }}
                    >
                        .<br />
                        .<br />
                        .
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fraud;