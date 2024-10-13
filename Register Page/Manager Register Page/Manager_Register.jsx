import React, { useState } from 'react';
import axios from 'axios';

// import './Manager_Register.css';

const RegisterManager = () => {
  const [venueName, setVenueName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // New state for password
  const [policyAccepted, setPolicyAccepted] = useState(false); // New state for policy checkbox
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Manage form visibility

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(''); // Reset message

    if (!policyAccepted) {
        setMessage('You must accept the policy agreement to complete registration.');
        setIsLoading(false);
        return;
    }

    try {
        // Make a POST request to your backend for registering the manager
        const response = await axios.post('http://localhost:3000/api/register-manager', {
            venueName,
            managerName,
            email,
            password // Ensure you're also sending the password
        });

        // Handle success response
        if (response.data.success) {
          setMessage('Manager registered successfully!');
      } else {
          setMessage(response.data.message || 'Error registering manager.');
      }
      
    } catch (error) {
      console.error('Error during manager registration:', error.response?.data || error.message);
      setMessage('There was an error registering the manager.'); // Adjust the message based on error response
  
  
    } finally {
        setIsLoading(false);
    }
};


  const handleClose = () => {
    setIsVisible(false); // Simply hide the form without reloading or navigating
  };

  if (!isVisible) return null;

  return (
    <div>
      <h2>Register as a Venue Manager</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Venue Name:</label>
          <input
            type="text"
            value={venueName}
            onChange={(e) => setVenueName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Manager Name:</label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label> {/* New password field */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Policy Agreement Section */}
        <div style={{ marginTop: '20px' }}>
          <h4>Policy Agreement</h4>
          <p>
            By registering as a manager, you agree to the following terms:
          </p>
          <ul>
            <li>You will be solely responsible for managing the venue.</li>
            <li>Any violations of the platform's rules will result in your removal as a manager.</li>
            <li>As a manager, you must adhere to all platform policies and uphold professionalism at all times.</li>
          </ul>
          <div>
            <input
              type="checkbox"
              id="policy"
              checked={policyAccepted}
              onChange={(e) => setPolicyAccepted(e.target.checked)}
            />
            <label htmlFor="policy">I agree to the policy agreement</label>
          </div>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <button onClick={handleClose}>Close</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterManager;