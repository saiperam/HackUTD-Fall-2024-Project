import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Budget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [budgetGoal, setBudgetGoal] = useState(() => {
    // Retrieve the stored budget goal from localStorage, if any
    return localStorage.getItem('budgetGoal') || '';
  });
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBudgetGoalChange = (e) => {
    setBudgetGoal(e.target.value);
  };

  const saveBudgetGoal = () => {
    localStorage.setItem('budgetGoal', budgetGoal);
    alert('Budget Goal Saved!');
  };
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { user: true, text: chatInput }]);
      setChatInput('');
      // Simulate bot response
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: "I'm here to help! What can I do for you?" },
        ]);
      }, 500);
    }
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
{/* Chatbot Toggle Button */}
 <div
        onClick={toggleChat}
        style={{
          width: 60,
          height: 60,
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#7399C6',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 2000,
        }}
      >
        💬
      </div>

      {/* Chatbot */}
      <div
        style={{
          width: isChatOpen ? '300px' : '0',
          height: '100%',
          backgroundColor: 'white',
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1500,
          overflowX: 'hidden',
          transition: 'width 0.3s ease',
          boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid #ccc',
        }}
      >
        {isChatOpen && (
          <>
            <div
              style={{
                padding: '10px',
                backgroundColor: '#7399C6',
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Chatbot
            </div>
            <div
              style={{
                flex: 1,
                padding: '10px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: message.user ? 'flex-end' : 'flex-start',
                    backgroundColor: message.user ? '#7399C6' : '#f1f1f1',
                    color: message.user ? 'white' : 'black',
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '80%',
                  }}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form
              onSubmit={handleChatSubmit}
              style={{
                display: 'flex',
                padding: '10px',
                borderTop: '1px solid #ccc',
              }}
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginRight: '10px',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#7399C6',
                  color: 'white',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
      {/* Left Quad Core Section */}
      <div
        style={{
          width: 357,
          height: 320,
          left: 121,
          top: 140,
          position: 'absolute',
          background: '#7399C6',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 48,
            fontFamily: 'Jomolhari',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}
        >
          Quad<br />Core
        </div>
      </div>

      {/* Budget Goal Section */}
      <div
        style={{
          width: 455,
          height: 200,
          left: 68,
          top: 504,
          position: 'absolute',
          background: 'black',
          borderRadius: 20,
          padding: '20px',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Jomolhari',
            fontWeight: '400',
            marginBottom: '10px',
          }}
        >
          Budget Goal:
        </div>
        <input
          type="text"
          value={budgetGoal}
          onChange={handleBudgetGoalChange}
          placeholder="Enter your budget goal"
          style={{
            width: '90%',
            padding: '10px',
            fontSize: 16,
            borderRadius: 10,
            border: 'none',
            outline: 'none',
          }}
        />
        <button
          onClick={saveBudgetGoal}
          style={{
            marginTop: '10px',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
            fontSize: 16,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Save Goal
        </button>
      </div>

      {/* Next Button */}
      <div
        style={{
          width: 150,
          height: 58,
          left: 200,
          top: 700,
          position: 'absolute',
          background: '#D9D9D9',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/Budget_Graph')} // Navigate to Budget Graph
      >
        <span
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'Abhaya Libre',
            fontWeight: '400',
          }}
        >
          Analyze
        </span>
      </div>

      {/* Right Monthly Transaction Section */}
      <div
        style={{
          width: 476,
          height: 649,
          left: 645,
          top: 71,
          position: 'absolute',
          background: 'black',
          borderRadius: 20,
          padding: 20,
          color: 'white',
          fontFamily: 'Jomolhari',
        }}
      >
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '400',
            marginBottom: 10,
          }}
        >
          Monthly Transaction
        </div>
        {/* Transaction Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10, fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '5px', borderBottom: '1px solid white' }}>Transaction ID</th>
              <th style={{ textAlign: 'left', padding: '5px', borderBottom: '1px solid white' }}>Category</th>
              <th style={{ textAlign: 'right', padding: '5px', borderBottom: '1px solid white' }}>Amount</th>
              <th style={{ textAlign: 'right', padding: '5px', borderBottom: '1px solid white' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {[
              { id: 'TX3359', category: 'Entertainment', amount: '16.27', date: '2024-11-04' },
              { id: 'TX5089', category: 'Miscellaneous', amount: '20.20', date: '2024-11-21' },
              { id: 'TX9967', category: 'Food & Groceries', amount: '125.44', date: '2024-11-10' },
              { id: 'TX4775', category: 'Utilities', amount: '267.69', date: '2024-11-19' },
              { id: 'TX8100', category: 'Health', amount: '63.39', date: '2024-11-03' },
              { id: 'TX9543', category: 'Entertainment', amount: '18.17', date: '2024-11-16' },
              { id: 'TX7482', category: 'Utilities', amount: '427.37', date: '2024-12-01' },
              { id: 'TX5322', category: 'Entertainment', amount: '52.42', date: '2024-11-15' },
              { id: 'TX7845', category: 'Transportation', amount: '98.88', date: '2024-11-25' },
              { id: 'TX1617', category: 'Utilities', amount: '194.48', date: '2024-11-25' },
              { id: 'TX3982', category: 'Utilities', amount: '358.22', date: '2024-11-25' },
{ id: 'TX1958', category: 'Utilities', amount: '187.77', date: '2024-11-14' },
{ id: 'TX3903', category: 'Health', amount: '53.91', date: '2024-11-06' },
{ id: 'TX4622', category: 'Transportation', amount: '136.72', date: '2024-11-02' },
{ id: 'TX9868', category: 'Miscellaneous', amount: '37.76', date: '2024-11-28' },
{ id: 'TX4246', category: 'Health', amount: '80.79', date: '2024-11-24' },
{ id: 'TX8135', category: 'Health', amount: '39.25', date: '2024-11-02' },
{ id: 'TX5559', category: 'Food & Groceries', amount: '56.38', date: '2024-11-10' },
{ id: 'TX5902', category: 'Health', amount: '64.05', date: '2024-11-14' },
{ id: 'TX1385', category: 'Utilities', amount: '164.77', date: '2024-11-26' },

            ].map((transaction) => (
              <tr key={transaction.id}>
                <td style={{ padding: '5px', borderBottom: '1px solid #444' }}>{transaction.id}</td>
                <td style={{ padding: '5px', borderBottom: '1px solid #444' }}>{transaction.category}</td>
                <td style={{ padding: '5px', textAlign: 'right', borderBottom: '1px solid #444' }}>{transaction.amount}</td>
                <td style={{ padding: '5px', textAlign: 'right', borderBottom: '1px solid #444' }}>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Budget;