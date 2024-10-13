import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './Login_Page.css';

function LoginPage() {
  const [entity, setEntity] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const uniqueId = uuidv4();


  const handleLogin = () => {
    
    navigate('/my-details', { state: { username } });


    if (!username || !password || !entity) {
      alert('Please fill out all fields.');
      return;
    }

    // Call handleLogin1 based on entity after validation
    switch (entity) {
      case 'A':
        navigate('/home');
        break;
      case 'B':
        navigate('/AdminHome');
        break;
      case 'C':
        navigate('/manager-details');
        break;
      default:
        alert('Please select a valid entity');
    }
  };


  return (
    <div className="login-container-div">
      <h2 className="form-title">Login</h2>
      <div className="signup-login">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor={`login-entity-${uniqueId}`}>Select Entity</label>
            <select 
              className="entity" 
              id={`login-entity-${uniqueId}`} 
              name="entity" 
              value={entity}
              onChange={(e) => setEntity(e.target.value)}
              required
            >
              <option value="">Select an entity</option>
              <option value="A">User</option>
              <option value="B">Admin</option>
              <option value="C">Venue Manager</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor={`login-username-${uniqueId}`}>Username</label>
            <input 
              type="text" 
              id={`login-username-${uniqueId}`} 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`login-password-${uniqueId}`}>Password</label>
            <input 
              type="password" 
              id={`login-password-${uniqueId}`} 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
// import './Login_Page.css';

// function LoginPage() {
//   const [entity, setEntity] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const uniqueId = uuidv4();


//   const handleLogin = (username) => {
    
//     navigate('/my-details', { state: { username } });


//     if (!username || !password || !entity) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     // Call handleLogin1 based on entity after validation
//     switch (entity) {
//       case 'A':
//         navigate('/home');
//         break;
//       case 'B':
//         navigate('/AdminHome');
//         break;
//       case 'C':
//         navigate('/booking-history');
//         break;
//       default:
//         alert('Please select a valid entity');
//     }
//   };


//   return (
//     <div className="login-container-div">
//       <h2 className="form-title">Login</h2>
//       <div className="signup-login">
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor={`login-entity-${uniqueId}`}>Select Entity</label>
//             <select 
//               className="entity" 
//               id={`login-entity-${uniqueId}`} 
//               name="entity" 
//               value={entity}
//               onChange={(e) => setEntity(e.target.value)}
//               required
//             >
//               <option value="">Select an entity</option>
//               <option value="A">User</option>
//               <option value="B">Admin</option>
//               <option value="C">Venue Manager</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor={`login-username-${uniqueId}`}>Username</label>
//             <input 
//               type="text" 
//               id={`login-username-${uniqueId}`} 
//               name="username" 
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor={`login-password-${uniqueId}`}>Password</label>
//             <input 
//               type="password" 
//               id={`login-password-${uniqueId}`} 
//               name="password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
