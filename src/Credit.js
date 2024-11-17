import React from 'react';
import { useNavigate } from 'react-router-dom';

const Credit = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
            {/* Top Blue Header */}
            <div
                style={{
                    width: 1097,
                    height: 144,
                    left: '50%',
                    top: 51,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    background: '#7399C6',
                    borderRadius: 20,
                }}
            />

            {/* Title */}
            <div
                style={{
                    width: 934,
                    height: 154,
                    left: '50%',
                    top: 46,
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

            {/* Card Information Section */}
            <div
                style={{
                    width: 773,
                    height: 427,
                    left: '50%',
                    top: 243,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    background: '#7399C6',
                    borderRadius: 20,
                }}
            >
                {/* Black Bar */}
                <div
                    style={{
                        width: '95%',
                        height: 92,
                        position: 'absolute',
                        top: 10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'black',
                        borderRadius: 10,
                    }}
                />

                {/* Card Information Title */}
                <div
                    style={{
                        width: '50%',
                        height: 57,
                        position: 'absolute',
                        top: 40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Jomolhari',
                        fontWeight: '400',
                        wordWrap: 'break-word',
                    }}
                >
                    Card Information
                </div>

                {/* Credit Card Number Field */}
                <div
                    style={{
                        width: '90%',
                        height: 74,
                        margin: '0 auto',
                        position: 'absolute',
                        top: 120,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'white',
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            width: '50%',
                            height: '100%',
                            position: 'absolute',
                            left: 20,
                            top: 20,
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Jomolhari',
                        }}
                    >
                        Credit Card Number:
                    </div>
                </div>

                {/* Expiration and CCV Fields */}
                <div
                    style={{
                        width: '40%',
                        height: 73,
                        position: 'absolute',
                        top: 220,
                        left: '20%',
                        background: 'white',
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 20,
                            top: 20,
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Jomolhari',
                        }}
                    >
                        Exp:
                    </div>
                </div>
                <div
                    style={{
                        width: '40%',
                        height: 73,
                        position: 'absolute',
                        top: 220,
                        left: '55%',
                        background: 'white',
                        borderRadius: 20,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 20,
                            top: 20,
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Jomolhari',
                        }}
                    >
                        CCV:
                    </div>
                </div>
            </div>

            {/* Next Button */}
            <div
                style={{
                    width: 150,
                    height: 58,
                    left: '50%',
                    top: 719,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    background: 'black',
                    borderRadius: 20,
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/Budget')} // Navigate to Budget.js
            >
                <div
                    style={{
                        width: 115,
                        height: 28,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Jomolhari',
                        fontWeight: '400',
                    }}
                >
                    Next
                </div>
            </div>
        </div>
    );
};

export default Credit;
