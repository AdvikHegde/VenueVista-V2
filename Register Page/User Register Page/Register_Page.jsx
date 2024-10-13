// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './Register_Page.css'; // Import specific styles

// function RegisterPage() {
//   const [entity, setEntity] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isVisible, setIsVisible] = useState(true); // Manage form visibility
//   const uniqueId = uuidv4(); // Generate a unique ID

//   const handleRegister = (event) => {
//     event.preventDefault();

//     if (!username || !password || !entity || password !== confirmPassword) {
//       alert('Please fill out all fields correctly.');
//       return;
//     }

//     // Example API call (replace with actual implementation)
//     // api.register({ username, password, entity })
//     //   .then(response => {
//     //     setIsVisible(false); // Hide form on successful registration
//     //   })
//     //   .catch(error => {
//     //     alert('Registration failed. Please try again.');
//     //   });
//   };

//   const handleClose = () => {
//     setIsVisible(false); // Simply hide the form without reloading or navigating
//   };

//   if (!isVisible) return null; // Do not render the component if it's not visible

//   return (
//     <div className="register-container-div">
//       <h2 className="form-title">Register</h2>
//       <div className="signup-login">
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label htmlFor={`register-entity-${uniqueId}`}>Select Entity</label>
//             <select 
//               className="entity" 
//               id={`register-entity-${uniqueId}`} 
//               name="entity" 
//               value={entity}
//               onChange={(e) => setEntity(e.target.value)}
//               required
//             >
//               <option value="">Select an entity</option>
//               <option value="user">User</option>
//               <option value="venue_manager">Venue Manager</option>
//               <option value="venue_coordinator">Venue Coordinator</option>
//               <option value="admin">Admin</option>
//             </select>

//             <label htmlFor={`register-username-${uniqueId}`}>Username</label>
//             <input 
//               type="text" 
//               id={`register-username-${uniqueId}`} 
//               name="username" 
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />

//             <label htmlFor={`register-password-${uniqueId}`}>Password</label>
//             <input 
//               type="password" 
//               id={`register-password-${uniqueId}`} 
//               name="password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <label htmlFor={`register-confirmPassword-${uniqueId}`}>Confirm Password</label>
//             <input 
//               type="password" 
//               id={`register-confirmPassword-${uniqueId}`} 
//               name="confirmPassword" 
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Register</button>
//           </div>
//         </form>
//         <button onClick={handleClose}>Close</button> {/* Close button to hide the form */}
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;














import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Register_Page.css'; // Import specific styles

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Manage form visibility
  const uniqueId = uuidv4(); // Generate a unique ID

  const handleRegister = async (event) => {
    event.preventDefault();

    // Simple validation check for username, password, and password confirmation
    if (!username || !password || password !== confirmPassword) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const userData = { username, password };

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setIsVisible(false); // Hide form on successful registration
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  const handleClose = () => {
    setIsVisible(false); // Simply hide the form without reloading or navigating
  };

  if (!isVisible) return null; // Do not render the component if it's not visible

  return (
    <div className="register-container-div">
      <h2 className="form-title">Register</h2>
      <div className="signup-login">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor={`register-username-${uniqueId}`}>Username</label> {/* Backticks for template literals */}
            <input 
              type="text" 
              id={`register-username-${uniqueId}`}  
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
  
            <label htmlFor={`register-password-${uniqueId}`}>Password</label> {/* Backticks for template literals */}
            <input 
              type="password" 
              id={`register-password-${uniqueId}`}  
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
  
            <label htmlFor={`register-confirmPassword-${uniqueId}`}>Confirm Password</label> {/* Backticks for template literals */}
            <input 
              type="password" 
              id={`register-confirmPassword-${uniqueId}`}  
              name="confirmPassword" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
        <button onClick={handleClose}>Close</button> 
      </div>
    </div>
  );
  
}

export default RegisterPage;