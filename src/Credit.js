import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Credit = () => {
    const navigate = useNavigate(); // Hook for navigation

    // State to store user inputs
    const [cardInfo, setCardInfo] = useState({
        cardNumber: '',
        exp: '',
        ccv: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardInfo({ ...cardInfo, [name]: value });
    };

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
                    top: 60,
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
                        width: '100%',
                        height: 70,
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
                        top: 35,
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
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <label
                        htmlFor="cardNumber"
                        style={{
                            marginBottom: '5px',
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Jomolhari',
                        }}
                    >
                        Credit Card Number:
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardInfo.cardNumber}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            padding: '5px',
                        }}
                    />
                </div>

                {/* Expiration and CCV Fields */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between', // Align boxes with space between them
                        margin: '0 auto',
                        position: 'absolute',
                        top: 220,
                        width: '90%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    {/* Exp Field */}
                    <div
                        style={{
                            width: '48%',
                            height: 73,
                            background: 'white',
                            borderRadius: 20,
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginRight: '10px', // Added margin for spacing
                        }}
                    >
                        <label
                            htmlFor="exp"
                            style={{
                                marginBottom: '5px',
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Jomolhari',
                            }}
                        >
                            Exp:
                        </label>
                        <input
                            type="text"
                            id="exp"
                            name="exp"
                            value={cardInfo.exp}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                padding: '5px',
                            }}
                        />
                    </div>

                    {/* CCV Field */}
                    <div
                        style={{
                            width: '48%',
                            height: 73,
                            background: 'white',
                            borderRadius: 20,
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginLeft: '10px', // Added margin for spacing
                        }}
                    >
                        <label
                            htmlFor="ccv"
                            style={{
                                marginBottom: '5px',
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Jomolhari',
                            }}
                        >
                            CCV:
                        </label>
                        <input
                            type="text"
                            id="ccv"
                            name="ccv"
                            value={cardInfo.ccv}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                padding: '5px',
                            }}
                        />
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
                onClick={() => {
                    console.log(cardInfo); // Log user inputs
                    navigate('/Budget'); // Navigate to Budget.js
                }}
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
