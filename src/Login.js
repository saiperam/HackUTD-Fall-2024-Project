import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from './assets/HackLogo-removebg-preview (1).png';

const Login = () => {
    const navigate = useNavigate(); // Hook to handle navigation

    // State to store user input
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                    {/* Image on the Left */}
                    <img
                src={myImage}
                alt="Hackathon Logo"
                style={{
                    position: 'absolute',
                    top: '270px',
                    left: '250px',
                    width: '400px',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            />
            {/* Header (Quad Core Rectangle) */}
            <div style={{
                width: 1097,
                height: 144,
                left: '50%', // Center horizontally
                top: 51,
                position: 'absolute',
                transform: 'translateX(-50%)', // Adjust for centering
                background: '#7399C6',
                borderRadius: 20,
            }} />

            {/* Title (Quad Core) */}
            <div style={{
                width: 934,
                height: 154,
                left: '50%', // Center horizontally
                top: 62,
                position: 'absolute',
                transform: 'translateX(-50%)', // Adjust for centering
                textAlign: 'center',
                color: 'white',
                fontSize: 96,
                fontFamily: 'Jomolhari',
                fontWeight: '400',
                wordWrap: 'break-word',
            }}>Quad Core</div>

            {/* Main Box */}
            <div style={{
                width: 455,
                height: 393,
                left: 732, // Slightly shifted right
                top: 263,
                position: 'absolute',
                background: '#7399C6',
                borderRadius: 20,
            }} />

            {/* Form Container */}
            <div style={{
                width: 379,
                height: 226,
                left: 770, // Slightly shifted right
                top: 347,
                position: 'absolute',
            }}>
                {/* Input Fields */}
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    style={{
                        width: 250,
                        height: 58,
                        left: 129,
                        top: 0,
                        position: 'absolute',
                        background: 'white',
                        borderRadius: 20,
                        padding: '10px',
                        fontSize: 16,
                        border: '1px solid #ccc',
                    }}
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    style={{
                        width: 250,
                        height: 58,
                        left: 129,
                        top: 84,
                        position: 'absolute',
                        background: 'white',
                        borderRadius: 20,
                        padding: '10px',
                        fontSize: 16,
                        border: '1px solid #ccc',
                    }}
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    style={{
                        width: 250,
                        height: 58,
                        left: 129,
                        top: 168,
                        position: 'absolute',
                        background: 'white',
                        borderRadius: 20,
                        padding: '10px',
                        fontSize: 16,
                        border: '1px solid #ccc',
                    }}
                />

                {/* Form Labels */}
                <div style={{
                    width: 108,
                    height: 43,
                    left: 0,
                    top: 15,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Jomolhari',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                }}>First Name:</div>
                <div style={{
                    width: 108,
                    height: 43,
                    left: 0,
                    top: 92,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Jomolhari',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                }}>Last Name:</div>
                <div style={{
                    width: 108,
                    height: 43,
                    left: 0,
                    top: 175,
                    position: 'absolute',
                    color: '#1E1E1E',
                    fontSize: 20,
                    fontFamily: 'Jomolhari',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                }}>Email:</div>
            </div>

            {/* Personal Info Header */}
            <div style={{
                width: 312,
                height: 45,
                left: 806, // Slightly shifted right
                top: 289,
                position: 'absolute',
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Jomolhari',
                fontWeight: '400',
                wordWrap: 'break-word',
            }}>Personal Information</div>

            {/* Next Button */}
            <div
                style={{
                    width: 150,
                    height: 58,
                    left: '50%', // Center horizontally
                    top: 700,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    background: 'black',
                    borderRadius: 20,
                    cursor: 'pointer',
                }}
                onClick={() => {
                    console.log(formData); // Log user input
                    navigate('/Credit'); // Navigate to credit.js
                }}
            ></div>
            <div
                style={{
                    width: 115,
                    height: 28,
                    left: '50%',
                    top: 715,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Jomolhari',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    console.log(formData); // Log user input
                    navigate('/Credit'); // Navigate to credit.js
                }}
            >
                Next
            </div>
        </div>
    );
};

export default Login;
