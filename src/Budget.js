import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook

const Budget = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
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
          height: 143,
          left: 68,
          top: 504,
          position: 'absolute',
          background: 'black',
          borderRadius: 20,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 30,
            top: 30,
            color: 'white',
            fontSize: 20,
            fontFamily: 'Jomolhari',
            fontWeight: '400',
          }}
        >
          Budget Goal:
        </div>
        <div
          style={{
            width: 163,
            height: 101,
            left: 280,
            top: 20,
            position: 'absolute',
            background: 'white',
            borderRadius: 20,
          }}
        >
          <div
            style={{
              width: 106,
              height: 1,
              left: 30,
              top: 50,
              position: 'absolute',
              border: '1px solid black',
            }}
          ></div>
        </div>
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
          Next Button
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
