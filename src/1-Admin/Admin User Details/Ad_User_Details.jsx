// import { NavLink } from 'react-router-dom';

// import React, { useEffect, useState } from 'react';

// import Sidebar from '../Admin Sidebar/AdSideBar';

// import '../Admin User Details/Ad_User_Details.css';

// const Ad_User_Details = () => {
//   const [data, setData] = useState([]); // To store customer data
//   const [selectedUser, setSelectedUser] = useState(null); // To store selected user details

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       const response = await fetch('http://localhost:5000/api/customers');
//       const result = await response.json();
//       setData(result);
//     };

//     fetchCustomers();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user); // Set the clicked user as selected
//   };
//   return(
//   <>
//         <Sidebar></Sidebar>

//         <div className="user-details-container">
//       <h1>Customer List</h1>

//       {/* List of customers */}
//       <div className="customer-list">
//         {data.map((user) => (
//           <div 
//             key={user._id} 
//             className="customer-card" 
//             onClick={() => handleUserClick(user)}
//           >
//             <h3>{user.username}</h3>
//             <p>{user.name}</p>
//             <p>{user.phone}</p>
//           </div>
//         ))}
//       </div>

//       {/* Details of the selected user */}
//       {selectedUser && (
//         <div className="customer-details-box">
//           <h2>Details for {selectedUser.name}</h2>
//           <div className="customer-details">
//             <div>
//               <label><strong>Name:</strong></label>
//               <input type="text" value={selectedUser.name} readOnly />
//             </div>
//             <div>
//               <label><strong>Username:</strong></label>
//               <input type="text" value={selectedUser.username} readOnly />
//             </div>
//             <div>
//               <label><strong>Email:</strong></label>
//               <input type="email" value={selectedUser.email} readOnly />
//             </div>
//             <div>
//               <label><strong>Phone:</strong></label>
//               <input type="tel" value={selectedUser.phone} readOnly />
//             </div>
//             <div>
//               <label><strong>Date of Birth:</strong></label>
//               <input type="date" value={selectedUser.DOB?.substring(0, 10)} readOnly />
//             </div>
//             <div>
//               <label><strong>Address:</strong></label>
//               <input type="text" value={selectedUser.address} readOnly />
//             </div>
//             <div>
//               <label><strong>Country:</strong></label>
//               <input type="text" value={selectedUser.country} readOnly />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//         </>
//   );
// };

// export default Ad_User_Details; // Ensure this line is present
// import { NavLink } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import Sidebar from '../Admin Sidebar/AdSideBar';

// const Ad_User_Details = () => {
//   const [data, setData] = useState([]); // To store customer data
//   const [selectedUser, setSelectedUser] = useState(null); // To store selected user details

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       const response = await fetch('http://localhost:5000/api/customers');
//       const result = await response.json();
//       setData(result);
//     };

//     fetchCustomers();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user); // Set the clicked user as selected
//   };

//   const closeModal = () => {
//     setSelectedUser(null); // Close modal by clearing selected user
//   };

//   return (
//     <>
//       <Sidebar />

//       <div className="user-details-container">
//         <h1>Customer List</h1>

//         {/* List of customers */}
//         <div className="customer-list">
//           {data.map((user) => (
//             <div 
//               key={user._id} 
//               className="customer-card" 
//               onClick={() => handleUserClick(user)}
//             >
//               <h3>{user.username}</h3>
//               <p>{user.name}</p>
//               <p>{user.phone}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Show the modal if a user is selected */}
//       {selectedUser && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Details for {selectedUser.name}</h2>
//             <div className="customer-details">
//               <div>
//                 <label><strong>Name:</strong></label>
//                 <input type="text" value={selectedUser.name} readOnly />
//               </div>
//               <div>
//                 <label><strong>Username:</strong></label>
//                 <input type="text" value={selectedUser.username} readOnly />
//               </div>
//               <div>
//                 <label><strong>Email:</strong></label>
//                 <input type="email" value={selectedUser.email} readOnly />
//               </div>
//               <div>
//                 <label><strong>Phone:</strong></label>
//                 <input type="tel" value={selectedUser.phone} readOnly />
//               </div>
//               <div>
//                 <label><strong>Date of Birth:</strong></label>
//                 <input type="date" value={selectedUser.DOB?.substring(0, 10)} readOnly />
//               </div>
//               <div>
//                 <label><strong>Address:</strong></label>
//                 <input type="text" value={selectedUser.address} readOnly />
//               </div>
//               <div>
//                 <label><strong>Country:</strong></label>
//                 <input type="text" value={selectedUser.country} readOnly />
//               </div>
//             </div>
//             <button className="close-btn" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}

//     </>
//   );
// };

// export default Ad_User_Details;

// import React, { useEffect, useState, useRef } from 'react';
// import Sidebar from '../Admin Sidebar/AdSideBar';

// const Ad_User_Details = () => {
//   const [data, setData] = useState([]); // To store customer data
//   const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
//   const inputRefs = useRef({}); // To store references to input elements

//   // Fetch the customer data
//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/customers'); // Replace with your API URL
//         const result = await response.json();
//         console.log("Customer data fetched: ", result); // Log the fetched data
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching customer data:", error); // Handle fetch error
//       }
//     };

//     fetchCustomers();
//   }, []);

//   const handleUserClick = (user) => {
//     console.log("User clicked: ", user); // Log the clicked user
//     setSelectedUser(user); // Set the clicked user as selected
//   };

//   const closeModal = () => {
//     setSelectedUser(null); // Close modal by clearing selected user
//   };

//   // Function to adjust the input width according to the content
//   const adjustInputWidths = () => {
//     Object.keys(inputRefs.current).forEach((key) => {
//       const input = inputRefs.current[key];
//       if (input) {
//         input.style.width = "auto"; // Reset width to auto to measure the scrollWidth
//         input.style.width = `${input.scrollWidth}px`; // Set the width based on the scrollWidth
//       }
//     });
//   };

//   // Adjust the widths after the component mounts and when a user is selected
//   useEffect(() => {
//     if (selectedUser) {
//       setTimeout(adjustInputWidths, 0); // Use timeout to ensure DOM updates first
//     }
//   }, [selectedUser]);

//   return (
//     <>
//       <Sidebar />

//       <div className="user-details-container">
//         <h1>Customer List</h1>

//         {/* Show loading message or the list of customers */}
//         {data.length === 0 ? (
//           <p>Loading customers...</p>
//         ) : (
//           <div className="customer-list">
//             {data.map((user) => (
//               <div 
//                 key={user._id} 
//                 className="customer-card" 
//                 onClick={() => handleUserClick(user)}
//               >
//                 <h3>{user.username}</h3>
//                 <p>{user.name}</p>
//                 <p>{user.phone}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Show the modal with user details if a user is selected */}
//       {selectedUser && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Details for {selectedUser.name}</h2>
//             <div className="customer-details">
//               <div>
//                 <label><strong>Name:</strong></label>
//                 <input 
//                   type="text" 
//                   value={selectedUser.name} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['name'] = el)} 
//                 />
//               </div>
//               <div>
//                 <label><strong>Username:</strong></label>
//                 <input 
//                   type="text" 
//                   value={selectedUser.username} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['username'] = el)} 
//                 />
//               </div>
//               <div>
//                 <label><strong>Email:</strong></label>
//                 <input 
//                   type="email" 
//                   value={selectedUser.email} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['email'] = el)} 
//                 />
//               </div>
//               <div>
//                 <label><strong>Phone:</strong></label>
//                 <input 
//                   type="tel" 
//                   value={selectedUser.phone} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['phone'] = el)} 
//                 />
//               </div>
//               <div>
//                 <label><strong>Date of Birth:</strong></label>
//                 <input 
//                   type="date" 
//                   value={selectedUser.DOB?.substring(0, 10)} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['DOB'] = el)} 
//                   style={{ width: '150px' }} 
//                 />
//               </div>
//               <div>
//                 <label><strong>Address:</strong></label>
//                 <input 
//                   type="text" 
//                   value={selectedUser.address} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['address'] = el)} 
//                 />
//               </div>
//               <div>
//                 <label><strong>Country:</strong></label>
//                 <input 
//                   type="text" 
//                   value={selectedUser.country} 
//                   readOnly 
//                   ref={(el) => (inputRefs.current['country'] = el)} 
//                 />
//               </div>
//             </div>
//             <button className="close-btn" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}

//       <style>{`
//         /* Main layout for sidebar and content */
//         .app-container {
//           display: flex; /* Flexbox layout to align sidebar and content */
//         }

//         /* Sidebar Styling */
//         .sidebar {
//           position: fixed; /* Fix the sidebar to the left */
//           top: 0;
//           left: 0;
//           height: 100vh; /* Full height of the viewport */
//           width: 250px; /* Fixed width for sidebar */
//           background-color: #333; /* Dark background color */
//           color: white;
//           padding: 20px;
//           overflow-y: auto; /* Allows scrolling if content exceeds viewport height */
//           z-index: 1000; /* Make sure the sidebar stays on top */
//         }

//         /* Main Content Styling */
//         .content {
//           margin-left: 250px; /* This should match the sidebar's width */
//           padding: 20px;
//           flex-grow: 1; /* Allow content to take remaining space */
//           min-height: 100vh; /* Ensure the content fills the entire height of the viewport */
//           box-sizing: border-box; /* Ensure padding is included in the total width */
//           background-color: #f9f9f9; /* Optional: background color for the content */
//         }

//         /* User Details Container */
//         .user-details-container {
//           max-width: 800px; /* Restrict the maximum width */
//           width: 100%; /* Full width to use available space */
//           margin: 0 auto; /* Center the container */
//         }

//         /* Customer List */
//         .customer-list {
//           display: flex;
//           flex-direction: column;
//           gap: 10px; /* Space between customer cards */
//         }

//         /* Customer Card */
//         .customer-card {
//           border: 1px solid #ccc;
//           padding: 15px;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//           display: flex; /* Flexbox for layout */
//           justify-content: space-between; /* Space items evenly */
//           align-items: center; /* Center items vertically */
//         }

//         .customer-card div {
//           flex: 1; /* Allow child divs to grow and take available space */
//           text-align: left; /* Align text to the left for better readability */
//         }

//         .customer-card:hover {
//           background-color: #f0f0f0; /* Hover effect */
//         }

//         /* Modal Overlay */
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//         }

//         .modal-content {
//           background: white;
//           padding: 20px;
//           border-radius: 8px;
//           max-width: 600px;
//           width: 100%;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//           position: relative;
//         }

//         .close-btn {
//           background: #ff4d4d;
//           color: white;
//           border: none;
//           padding: 10px 15px;
//           cursor: pointer;
//           border-radius: 4px;
//           position: absolute;
//           top: 10px;
//           right: 10px;
//         }

//         .close-btn:hover {
//           background: #ff1a1a;
//         }

//         /* Input Styles */
//         input[type="text"], input[type="email"], input[type="tel"], input[type="date"] {
//           border: 1px solid #ccc;
//           border-radius: 4px;
//           padding: 8px;
//           min-width: 100px; /* Set a minimum width for better appearance */
//           box-sizing: border-box; /* Include padding in width */
//           transition: width 0.3s; /* Smooth transition for width changes */
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .sidebar {
//             width: 200px; /* Adjust sidebar width for smaller screens */
//           }

//           .content {
//             margin-left: 200px; /* Adjust content margin accordingly */
//           }
//         }

//         @media (max-width: 576px) {
//           .sidebar {
//             position: relative; /* Sidebar becomes part of the normal flow */
//             width: 100%;
//             height: auto; /* Adjust sidebar height */
//           }

//           .content {
//             margin-left: 0; /* No margin on smaller screens */
//             padding-top: 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Ad_User_Details;



// import React, { useEffect, useState, useRef } from 'react';
// import Sidebar from '../Admin Sidebar/AdSideBar';

// const Ad_User_Details = () => {
//   const [data, setData] = useState([]); // To store customer data
//   const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
//   const inputRefs = useRef({}); // To store references to input elements

//   // Fetch the customer data
//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/customers'); // Replace with your API URL
//         const result = await response.json();
//         console.log("Customer data fetched: ", result); // Log the fetched data
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching customer data:", error); // Handle fetch error
//       }
//     };

//     fetchCustomers();
//   }, []);

//   const handleUserClick = (user) => {
//     console.log("User clicked: ", user); // Log the clicked user
//     setSelectedUser(user); // Set the clicked user as selected
//   };

//   const closeModal = () => {
//     setSelectedUser(null); // Close modal by clearing selected user
//   };

//   // Function to adjust the input width according to the content
//   const adjustInputWidths = () => {
//     Object.keys(inputRefs.current).forEach((key) => {
//       const input = inputRefs.current[key];
//       if (input) {
//         input.style.width = "auto"; // Reset width to auto to measure the scrollWidth
//         input.style.width = `${input.scrollWidth}px`; // Set the width based on the scrollWidth
//       }
//     });
//   };

//   // Adjust the widths after the component mounts and when a user is selected
//   useEffect(() => {
//     if (selectedUser) {
//       setTimeout(adjustInputWidths, 0); // Use timeout to ensure DOM updates first
//     }
//   }, [selectedUser]);

//   return (
//     <>
//       <Sidebar />

//       <div className="user-details-container">
//         <h1>Customer List</h1>

//         {/* Show loading message or the list of customers */}
//         {data.length === 0 ? (
//           <p>Loading customers...</p>
//         ) : (
//           <div className="customer-list">
//             {data.map((user) => (
//               <div 
//                 key={user._id} 
//                 className="customer-card" 
//                 onClick={() => handleUserClick(user)}
//               >
//                 <h3>{user.username}</h3>
//                 <p>{user.name}</p>
//                 <p>{user.phone}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Show the modal with user details if a user is selected
//       {selectedUser && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Details for {selectedUser.name}</h2>
//             <div className="customer-details">
//             {Object.entries(selectedUser)
//   .filter(([key]) => key !== 'id' && key !== '_id' && key !== 'password') // Exclude 'id', '_id', and 'password'
//   .map(([key, value]) => (
//     <div className="input-group" key={key}>
//       <label><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></label>
//       <input 
//         type={key === 'DOB' ? 'text' : (key === 'email' ? 'email' : 'text')} 
//         value={key === 'DOB' ? new Date(value).toISOString().substring(0, 10) : value} 
//         readOnly 
//         ref={(el) => (inputRefs.current[key] = el)} 
//       />
//     </div>
//   ))}


//             </div>
//             <button className="close-btn" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )} */}
// {selectedUser && (
//   <div className="modal-overlay">
//     <div className="modal-content">
//       <h2>Details for {selectedUser.name}</h2>
//       <div className="customer-details">
//         {Object.entries(selectedUser)
//           .filter(([key]) => key !== 'id' && key !== '_id' && key !== 'password') // Exclude 'id', '_id', and 'password'
//           .map(([key, value]) => (
//             <div className="input-group" key={key}>
//               <label><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></label>
//               <input 
//                 type={key === 'DOB' ? 'text' : (key === 'email' ? 'email' : 'text')} 
//                 value={key === 'DOB' 
//                   ? (() => {
//                       const date = new Date(value); // Create a new date object
//                       const day = date.getDate().toString().padStart(2, '0'); // Get day
//                       const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month
//                       const year = date.getFullYear(); // Get year
//                       return `${day}-${month}-${year}`; // Return formatted string "DD-MM-YYYY"
//                     })() 
//                   : value} 
//                 readOnly 
//               />
//             </div>
//           ))}
//       </div>
//       <button className="close-btn" onClick={closeModal}>Close</button>
//     </div>
//   </div>
// )}





// <style>{`
//         /* Main layout for sidebar and content */
//         .app-container {
//           display: flex; /* Flexbox layout to align sidebar and content */
//         }

//         /* Sidebar Styling */
//         .sidebar {
//           position: fixed; /* Fix the sidebar to the left */
//           top: 0;
//           left: 0;
//           height: 100vh; /* Full height of the viewport */
//           width: 250px; /* Fixed width for sidebar */
//           background-color: #343a40; /* Dark background color */
//           color: white;
//           padding: 20px;
//           overflow-y: auto; /* Allows scrolling if content exceeds viewport height */
//           z-index: 1000; /* Make sure the sidebar stays on top */
//         }

//         /* User Details Container */
//         .user-details-container {
//           max-width: 800px; /* Restrict the maximum width */
//           width: 100%; /* Full width to use available space */
//           margin: 20px auto; /* Center the container with some margin */
//           font-family: 'Arial', sans-serif; /* Change font family */
//         }

//         h1 {
//           color: #007bff; /* Attractive header color */
//           text-align: center; /* Center header text */
//         }

//         /* Customer List */
//         .customer-list {
//           display: flex;
//           flex-direction: column;
//           gap: 10px; /* Space between customer cards */
//         }

//         /* Customer Card */
//         .customer-card {
//           border: 1px solid #ccc;
//           padding: 15px;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s, box-shadow 0.3s;
//           display: flex; /* Flexbox for layout */
//           justify-content: space-between; /* Space items evenly */
//           align-items: center; /* Center items vertically */
//           background-color: #ffffff; /* White background for cards */
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//           border-left: 4px solid #007bff; /* Left border for emphasis */
//         }

//         .customer-card div {
//           flex: 1; /* Allow child divs to grow and take available space */
//           text-align: left; /* Align text to the left for better readability */
//         }

//         .customer-card:hover {
//           background-color: #f0f8ff; /* Light blue on hover */
//           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
//         }

//         /* Modal Overlay */
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//         }

//         .modal-content {
//           background: #ffffff;
//           padding: 30px;
//           border-radius: 8px;
//           max-width: 600px;
//           width: 100%;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//           position: relative;
//           animation: slide-down 0.3s ease-out; /* Add animation for modal */
//         }

//         @keyframes slide-down {
//           from {
//             transform: translateY(-20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         h2 {
//           color: #343a40; /* Dark color for the modal header */
//           margin-bottom: 20px; /* Space below the header */
//         }

//         /* Input Group */
//         .input-group {
//           display: flex; /* Flexbox for input group */
//           align-items: center; /* Center items vertically */
//           margin-bottom: 15px; /* Space between input groups */
//         }

//         /* Input Styles */
//         label {
//           flex-basis: 150px; /* Fixed width for labels */
//           font-weight: bold; /* Bold text for labels */
//           color: #495057; /* Text color */
//         }

//         input[type="text"],
//         input[type="email"],
//         input[type="tel"],
//         input[type="date"] {
//           border: 1px solid #ced4da; /* Border color */
//           border-radius: 4px; /* Rounded corners */
//           padding: 10px; /* Padding inside inputs */
//           flex: 1; /* Allow input to fill remaining space */
//           min-width: 150px; /* Set a minimum width for better appearance */
//           transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transition for input focus */
//           font-size: 14px; /* Slightly larger font */
//           color: #495057; /* Text color */
//         }

//         input[type="text"]:focus,
//         input[type="email"]:focus {
//           border-color: #007bff; /* Change border color on focus */
//           box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add shadow on focus */
//         }

//         input:read-only {
//           background-color: #f8f9fa; /* Light background for read-only inputs */
//         }

//         /* Close Button */
//         .close-btn {
//           background: #007bff; /* Attractive button color */
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           border-radius: 4px;
//           transition: background-color 0.3s, transform 0.2s; /* Add transform transition */
//           font-size: 16px; /* Larger font for buttons */
//           margin-top: 20px; /* Space above button */
//         }

//         .close-btn:hover {
//           background: #0056b3; /* Darker blue on hover */
//           transform: translateY(-2px); /* Slight lift effect */
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .sidebar {
//             width: 200px; /* Adjust sidebar width for smaller screens */
//           }

//           .content {
//             margin-left: 200px; /* Adjust content margin accordingly */
//           }

//           .input-group {
//             flex-direction: column; /* Stack label and input vertically */
//             align-items: flex-start; /* Align items to start */
//           }

//           label {
//             margin-bottom: 5px; /* Space between label and input */
//           }
//         }

//         @media (max-width: 576px) {
//           .sidebar {
//             position: relative; /* Sidebar becomes part of the normal flow */
//             width: 100%;
//             height: auto; /* Adjust sidebar height */
//           }

//           .content {
//             margin-left: 0; /* No margin on smaller screens */
//             padding-top: 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Ad_User_Details;


// import React, { useEffect, useState } from 'react';
// import Sidebar from '../Admin Sidebar/AdSideBar';

// const Ad_User_Details = () => {
//   const [data, setData] = useState([]); // To store customer data
//   const [selectedUser, setSelectedUser] = useState(null); // To store selected user details

//   // Fetch the customer data
//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/customers'); // Replace with your API URL
//         const result = await response.json();
//         console.log("Customer data fetched: ", result); // Log the fetched data
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching customer data:", error); // Handle fetch error
//       }
//     };

//     fetchCustomers();
//   }, []);

//   const handleUserClick = (user) => {
//     console.log("User clicked: ", user); // Log the clicked user
//     setSelectedUser(user); // Set the clicked user as selected
//   };

//   const closeModal = () => {
//     setSelectedUser(null); // Close modal by clearing selected user
//   };

//   return (
//     <>
//       <Sidebar />

//       <div className="user-details-container">
//         <h1>Customer List</h1>

//         {/* Header for customer details */}
//         <div className="customer-header">
//           <div className="header-item">Username</div>
//           <div className="header-item">Name</div>
//           <div className="header-item">Phone No</div>
//         </div>

//         {/* Show loading message or the list of customers */}
//         {data.length === 0 ? (
//           <p>Loading customers...</p>
//         ) : (
//           <div className="customer-list">
//             {data.map((user) => (
//               <div 
//                 key={user._id} 
//                 className="customer-card" 
//                 onClick={() => handleUserClick(user)}
//               >
//                 <div className="customer-item">{user.username}</div>
//                 <div className="customer-item">{user.name}</div>
//                 <div className="customer-item">{user.phone}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Show the modal with user details if a user is selected */}
//       {selectedUser && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Details for {selectedUser.name}</h2>
//             <div className="customer-details">
//               {Object.entries(selectedUser)
//                 .filter(([key]) => key !== 'id' && key !== '_id' && key !== 'password') // Exclude 'id', '_id', and 'password'
//                 .map(([key, value]) => (
//                   <div className="input-group" key={key}>
//                     <label><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></label>
//                     <input 
//                       type={key === 'DOB' ? 'text' : (key === 'email' ? 'email' : 'text')} 
//                       value={key === 'DOB' 
//                         ? (() => {
//                             const date = new Date(value); // Create a new date object
//                             const day = date.getDate().toString().padStart(2, '0'); // Get day
//                             const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month
//                             const year = date.getFullYear(); // Get year
//                             return `${day} ${month} ${year}`; // Return formatted string "DD MM YYYY"
//                           })() 
//                         : value} 
//                       readOnly 
//                     />
//                   </div>
//                 ))}
//             </div>
//             <button className="close-btn" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}

//       <style>{`
//         /* Main layout for sidebar and content */
//         .app-container {
//           display: flex; /* Flexbox layout to align sidebar and content */
//         }

//         /* Sidebar Styling */
//         .sidebar {
//           position: fixed; /* Fix the sidebar to the left */
//           top: 0;
//           left: 0;
//           height: 100vh; /* Full height of the viewport */
//           width: 250px; /* Fixed width for sidebar */
//           background-color: #343a40; /* Dark background color */
//           color: white;
//           padding: 20px;
//           overflow-y: auto; /* Allows scrolling if content exceeds viewport height */
//           z-index: 1000; /* Make sure the sidebar stays on top */
//         }

//         /* User Details Container */
//         .user-details-container {
//           max-width: 800px; /* Restrict the maximum width */
//           width: 100%; /* Full width to use available space */
//           margin: 20px auto; /* Center the container with some margin */
//           font-family: 'Arial', sans-serif; /* Change font family */
//         }

//         h1 {
//           color: #007bff; /* Attractive header color */
//           text-align: center; /* Center header text */
//         }

//         /* Customer Header */
        // .customer-header {
        //   display: flex; /* Flexbox for header layout */
        //   background-color: #f8f9fa; /* Light background color for header */
        //   border-bottom: 2px solid #007bff; /* Blue border below the header */
        //   padding: 10px; /* Padding around the header */
        //   font-weight: bold; /* Bold text for headers */
        //   color: #343a40; /* Dark color for text */
        //   justify-content: space-between; /* Evenly distribute items */
        //   text-align: center; /* Center align text */
        // }

//         .header-item {
//           flex: 1; /* Equal space for each header item */
          
//         }

//         /* Customer List */
//         .customer-list {
//           display: flex;
//           flex-direction: column;
//           gap: 10px; /* Space between customer cards */
//         }

//         /* Customer Card */
//    .customer-card {
//     border: 1px solid #666; /* Darker overall border */
//     padding: 15px;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s, box-shadow 0.3s;
//     display: flex; /* Flexbox for layout */
//     justify-content: space-between; /* Space items evenly */
//     align-items: center; /* Center items vertically */
//     background-color: #ffffff; /* White background for cards */
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//     border-left: 4px solid #007bff; /* Emphasized left border */
//     text-align: center; /* Center align text */
// }



//         .customer-item {
//           flex: 1; /* Allow child divs to grow and take available space */
//           /* Align text to the left for better readability */
//         }

//         .customer-card:hover {
//           background-color: #f0f8ff; /* Light blue on hover */
//           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
//         }

//         /* Modal Overlay */
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//         }

//         .modal-content {
//           background: #ffffff;
//           padding: 30px;
//           border-radius: 8px;
//           max-width: 600px;
//           width: 100%;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//           position: relative;
//           animation: slide-down 0.3s ease-out; /* Add animation for modal */
//         }

//         @keyframes slide-down {
//           from {
//             transform: translateY(-20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         h2 {
//           color: #343a40; /* Dark color for the modal header */
//           margin-bottom: 20px; /* Space below the header */
//         }

//         /* Input Group */
//         .input-group {
//           display: flex; /* Flexbox for input group */
//           align-items: center; /* Center items vertically */
//           margin-bottom: 15px; /* Space between input groups */
//         }

//         /* Input Styles */
//         label {
//           flex-basis: 150px; /* Fixed width for labels */
//           font-weight: bold; /* Bold text for labels */
//           color: #495057; /* Text color */
//         }

//         input[type="text"],
//         input[type="email"],
//         input[type="tel"],
//         input[type="date"] {
//           border: 1px solid #ced4da; /* Border color */
//           border-radius: 4px; /* Rounded corners */
//           padding: 10px; /* Padding inside inputs */
//           flex: 1; /* Allow input to fill remaining space */
//           min-width: 150px; /* Set a minimum width for better appearance */
//           transition: width 0.3s; /* Smooth transition for width changes */
//           font-size: 14px; /* Slightly larger font */
//           color: #495057; /* Text color */
//         }

//         input:read-only {
//           background-color: #f8f9fa; /* Light background for read-only inputs */
//         }

//         /* Close Button */
//         .close-btn {
//           background: #007bff; /* Attractive button color */
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           border-radius: 4px;
//           transition: background-color 0.3s, transform 0.2s; /* Add transform transition */
//           font-size: 16px; /* Larger font for buttons */
//           margin-top: 20px; /* Space above button */
//         }

//         .close-btn:hover {
//           background: #0056b3; /* Darker blue on hover */
//           transform: translateY(-2px); /* Slight lift effect */
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .sidebar {
//             width: 200px; /* Adjust sidebar width for smaller screens */
//           }

//           .content {
//             margin-left: 200px; /* Adjust content margin accordingly */
//           }

//           .input-group {
//             flex-direction: column; /* Stack label and input vertically */
//             align-items: flex-start; /* Align items to start */
//           }

//           label {
//             margin-bottom: 5px; /* Space between label and input */
//           }
//         }

//         @media (max-width: 576px) {
//           .sidebar {
//             position: relative; /* Sidebar becomes part of the normal flow */
//             width: 100%;
//             height: auto; /* Adjust sidebar height */
//           }

//           .content {
//             margin-left: 0; /* No margin on smaller screens */
//             padding-top: 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Ad_User_Details;

// import React, { useEffect, useState } from 'react';
// import Sidebar from '../Admin Sidebar/AdSideBar';

// import './Ad_User_Details.css';
// const Ad_User_Details = () => {
//   const [data, setData] = useState([]); // To store customer data
//   const [selectedUser, setSelectedUser] = useState(null); // To store selected user details

//   // Fetch the customer data
//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/customers'); // Replace with your API URL
//         const result = await response.json();
//         console.log("Customer data fetched: ", result); // Log the fetched data
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching customer data:", error); // Handle fetch error
//       }
//     };

//     fetchCustomers();
//   }, []);

//   const handleUserClick = (user) => {
//     console.log("User clicked: ", user); // Log the clicked user
//     setSelectedUser(user); // Set the clicked user as selected
//   };

//   const closeModal = () => {
//     setSelectedUser(null); // Close modal by clearing selected user
//   };

//   // Function to handle clicks on the overlay
//   const handleOverlayClick = (event) => {
//     if (event.target.className === 'modal-overlay') {
//       closeModal(); // Close modal if overlay is clicked
//     }
//   };

//   return (
//     <>
//       <Sidebar />

//       <div className="user-details-container">
//         <h1>Customer List</h1>

//         {/* Header for customer details */}
//         <div className="customer-header">
//           <div className="header-item">Username</div>
//           <div className="header-item">Name</div>
//           <div className="header-item">Phone No</div>
//         </div>

//         {/* Show loading message or the list of customers */}
//         {data.length === 0 ? (
//           <p>Loading customers...</p>
//         ) : (
//           <div className="customer-list">
//             {data.map((user) => (
//               <div 
//                 key={user._id} 
//                 className="customer-card" 
//                 onClick={() => handleUserClick(user)}
//               >
//                 <div className="customer-item">{user.username}</div>
//                 <div className="customer-item">{user.name}</div>
//                 <div className="customer-item">{user.phone}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Show the modal with user details if a user is selected */}
//       {selectedUser && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal-content">
//             <h2>Details of {selectedUser.name}</h2>
//             <div className="customer-details">
//               {Object.entries(selectedUser)
//                 .filter(([key]) => key !== 'id' && key !== '_id' && key !== 'password') // Exclude 'id', '_id', and 'password'
//                 .map(([key, value]) => (
//                   <div className="input-group" key={key}>
//                     <label><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></label>
//                     <input 
//                       type={key === 'DOB' ? 'text' : (key === 'email' ? 'email' : 'text')} 
//                       value={key === 'DOB' 
//                         ? (() => {
//                             const date = new Date(value); // Create a new date object
//                             const day = date.getDate().toString().padStart(2, '0'); // Get day
//                             const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month
//                             const year = date.getFullYear(); // Get year
//                             return `${day} ${month} ${year}`; // Return formatted string "DD MM YYYY"
//                           })() 
//                         : value} 
//                       readOnly 
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}

     
//     </>
//   );
// };

// export default Ad_User_Details;
// import React, { useEffect, useState } from 'react';
// import Sidebar from '../Admin Sidebar/AdSideBar';
// import './Ad_User_Details.css';

// const Ad_User_Details = () => {
//     const [data, setData] = useState([]); // To store customer data
//     const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
//     const [message, setMessage] = useState(''); // To store delete message

//     // Fetch the customer data
//     useEffect(() => {
//         const fetchCustomers = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/customers');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch customers');
//                 }
//                 const result = await response.json();
//                 console.log("Customer data fetched: ", result);
//                 setData(result);
//             } catch (error) {
//                 console.error("Error fetching customer data:", error);
//             }
//         };

//         fetchCustomers();
//     }, []);

//     const handleUserClick = (user) => {
//         console.log("User clicked: ", user);
//         setSelectedUser(user);
//         setMessage('');
//     };

//     const closeModal = () => {
//         setSelectedUser(null);
//         setMessage('');
//     };

//     const handleOverlayClick = (event) => {
//         if (event.target.className === 'modal-overlay') {
//             closeModal();
//         }
//     };

//     const deleteUser = async (username) => {
//         if (!username) {
//             console.error("Username is not defined");
//             return;
//         }

//         try {
//             const response = await fetch(`http://localhost:5000/api/customers/username/${username}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 setData(data.filter(user => user.username !== username));
//                 setMessage('User deleted successfully!');
//             } else {
//                 const errorData = await response.json();
//                 console.error("Error deleting user:", errorData.message);
//                 setMessage(errorData.message || 'Error deleting user');
//             }
//         } catch (error) {
//             console.error("Error deleting user:", error);
//             setMessage('Error deleting user');
//         }
//     };

//     return (
//         <>
//             <Sidebar />
//             <div className="user-details-container">
//                 <h1>Customer List</h1>

//                 <div className="customer-header">
//                     <div className="header-item">Username</div>
//                     <div className="header-item">Name</div>
//                     <div className="header-item">Phone No</div>
//                 </div>

//                 {data.length === 0 ? (
//                     <p>Loading customers...</p>
//                 ) : (
//                     <div className="customer-list">
//                         {data.map((user) => (
//                             <div
//                                 key={user._id}
//                                 className="customer-card"
//                                 onClick={() => handleUserClick(user)}
//                             >
//                                 <div className="customer-item">{user.username}</div>
//                                 <div className="customer-item">{user.name}</div>
//                                 <div className="customer-item">{user.phone}</div>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {message && <p className="delete-message">{message}</p>}
//             </div>

//             {selectedUser && (
//                 <div className="modal-overlay" onClick={handleOverlayClick}>
//                     <div className="modal-content">
//                         <h2>Details of {selectedUser.name}</h2>
//                         <div className="customer-details">
//                             {Object.entries(selectedUser)
//                                 .filter(([key]) => key !== 'id' && key !== '_id' && key !== 'password')
//                                 .map(([key, value]) => (
//                                     <div className="input-group" key={key}>
//                                         <label><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></label>
//                                         <input
//                                             type={key === 'DOB' ? 'text' : (key === 'email' ? 'email' : 'text')}
//                                             value={key === 'DOB'
//                                                 ? (() => {
//                                                     const date = new Date(value);
//                                                     const day = date.getDate().toString().padStart(2, '0');
//                                                     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//                                                     const year = date.getFullYear();
//                                                     return `${day} ${month} ${year}`;
//                                                 })()
//                                                 : value}
//                                             readOnly
//                                         />
//                                     </div>
//                                 ))}
//                         </div>
//                         <button className="delete-button" onClick={() => deleteUser(selectedUser.username)}>
//                             Delete User
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Ad_User_Details;
import React, { useEffect, useState } from 'react';
import Sidebar from '../Admin Sidebar/AdSideBar';
import './Ad_User_Details.css';

const Ad_User_Details = () => {
    const [data, setData] = useState([]); // To store customer data
    const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
    const [message, setMessage] = useState(''); // To store delete message

    // Fetch the customer data
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/customers');
                if (!response.ok) {
                    throw new Error('Failed to fetch customers');
                }
                const result = await response.json();
                console.log("Customer data fetched: ", result);
                setData(result);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        fetchCustomers();
    }, []);

    const handleUserClick = (user) => {
        console.log("User clicked: ", user);
        setSelectedUser(user);
        setMessage('');
    };

    const closeModal = () => {
        setSelectedUser(null);
        setMessage('');
    };

    const handleOverlayClick = (event) => {
        if (event.target.className === 'modal-overlay') {
            closeModal();
        }
    };

    const deleteUser = async (username) => {
        if (!username) {
            console.error("Username is not defined");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/customers/username/${username}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setData(data.filter(user => user.username !== username));
                setMessage('User deleted successfully!');
            } else {
                const errorData = await response.json();
                console.error("Error deleting user:", errorData.message);
                setMessage(errorData.message || 'Error deleting user');
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            setMessage('Error deleting user');
        }
    };

    return (
        <>
            <h1 className="venue-title">VenueVista</h1>
            <Sidebar />
            <div className="user-details-container">
                <h1>Customer List</h1>

                <div className="customer-header">
                    <div className="header-item">Username</div>
                    <div className="header-item">Name</div>
                    <div className="header-item">Phone No</div>
                </div>

                {data.length === 0 ? (
                    <p>Loading customers...</p>
                ) : (
                    <div className="customer-list">
                        {data.map((user) => (
                            <div
                                key={user._id}
                                className="customer-card"
                                onClick={() => handleUserClick(user)}
                            >
                                <div className="customer-item">{user.username}</div>
                                <div className="customer-item">{user.name}</div>
                                <div className="customer-item">{user.phone}</div>
                            </div>
                        ))}
                    </div>
                )}

                {message && <p className="delete-message">{message}</p>}
            </div>

            {selectedUser && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <h2>Details of {selectedUser.name}</h2>
                        <div className="customer-details">
                            {Object.entries(selectedUser)
                                .filter(([key]) => key !== 'id' && key !== '_id' && key !== 'password')
                                .map(([key, value]) => (
                                    <div className="input-group" key={key}>
                                        <label><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></label>
                                        <input
                                            type={key === 'DOB' ? 'text' : (key === 'email' ? 'email' : 'text')}
                                            value={key === 'DOB'
                                                ? (() => {
                                                    const date = new Date(value);
                                                    const day = date.getDate().toString().padStart(2, '0');
                                                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                                                    const year = date.getFullYear();
                                                    return `${day} ${month} ${year}`;
                                                })()
                                                : value}
                                            readOnly
                                        />
                                    </div>
                                ))}
                        </div>
                        <button className="delete-button" onClick={() => deleteUser(selectedUser.username)}>
                            Delete User
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Ad_User_Details;
