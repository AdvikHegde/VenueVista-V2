// import { NavLink } from 'react-router-dom';

// import React, { useState, useEffect, useCallback } from 'react';
// import '../5-User Review/User_Review.css';
// import profileimage from '../4-User Personal Details/user.png';

// import'./Ad_Venue_Manager_Details.css';
// import Sidebar from '../8-AdSideBar/AdSideBar';
// const Ad_Venue_Manager_Details = () => {
//   // State for controlling visibility, textarea value, rating, searchVenueId, and selectedVenue
//   const [isVisible, setIsVisible] = useState(false);
//   const [text, setText] = useState('');
//   const [rating, setRating] = useState(null);
//   const [searchVenueId, setSearchVenueId] = useState(''); // Search input
//   const [selectedVenueId, setSelectedVenueId] = useState(null); // Selected venue ID
//   const [venueData, setVenueData] = useState(null); // Venue data

//   const [selectedVenue, setSelectedVenue] = useState(null); // Selected venue for modal
//   const [data, setData] = useState([]); // Venue data

//   // Open modal with selected venue
//   const openModal = (venue) => {
//     console.log(venue);
//     setSelectedVenue(venue);
//     setSelectedVenueId(venue.venueId);

//     setIsModalOpen(true);
//     setIsReviewMode(false); // Reset to venue details
//     setIsBookingMode(false); // Reset to venue details
//   };


//   // Fetch venue details based on the selected venue ID
//   const fetchVenueDetails = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/venues/${id}`);
//       if (!response.ok) {
//         throw new Error(`Venue not found (Error ${response.status})`);
//       }
//       const data = await response.json();
//       setVenueData(data);
//     } catch (error) {
//       console.error('Error fetching venue details:', error);
//       alert('Venue not found or server error');
//     }
//   };

//   const fetchAllVenues = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/venues'); // Fetch all venues
//       if (!response.ok) {
//         throw new Error(`Error fetching venues (Error ${response.status})`);
//       }
//       const data = await response.json();
//       setData(data); // Update state with fetched venue data
//     } catch (error) {
//       console.error('Error fetching venues:', error);
//       alert('Error fetching venues or server issue');
//     }
//   };

//   // Use useEffect to fetch venues when component mounts
//   useEffect(() => {
//     fetchAllVenues();
//   }, []); // Empty dependency array to ensure this runs once on component mount

//   // Handle search for venue reviews
//   const handleSearch = () => {
//     if (searchVenueId) {
//       setSelectedVenueId(searchVenueId);
//       console.log(searchVenueId);
//       fetchVenueDetails(searchVenueId); // Fetch venue details by searchVenueId
//     }
//   };


//   // Component to render venue details
//   const VenueDetails = ({ venueData }) => {
//     return (
//       <div className="venue-information">
//         <img src={venueData.imageUrl} alt={venueData.venueName} />
//         <p>{venueData.venueId}</p>
//         <p>{venueData.venueName}</p>
//         <p>{venueData.venueLocation}</p>
//       </div>
//     );
//   };

//   return (
//     <>
//      <Sidebar></Sidebar>
//       <div>
//         <h1>Ad Venue Manager Details</h1>
//         {/* Your component content goes here */}
//       </div>


//       {/* Search Container */}
//       <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search by Venue-ID..."
//             className="search-input"
//             value={searchVenueId}
//             onChange={(e) => setSearchVenueId(e.target.value)}
//           />
//           <button className="search-btn" onClick={handleSearch}>
//             Search
//           </button>
//       </div>

//       : (
//               <>
//                 <div className="venue-image-container">
//                   <img src={selectedVenue.imageUrl} alt={selectedVenue.venueName} className="modal-venue-image" />
//                 </div>

//                 <h2>{selectedVenue.venueName}</h2>

//                 <p className="venue-description-for-each-card">{selectedVenue.description}</p>

//                 <div className="venue-information-container">
//                   <h2>Information Overview</h2>
//                   <ul>
//                     <li><strong><p>Location : {selectedVenue.venueLocation}</p></strong></li>
//                     <li><strong><p>Contact: {selectedVenue.contact}</p></strong></li>
//                     <li><strong><p>Capacity: {selectedVenue.capacity}</p></strong></li>
//                     <li><strong><p>Operating Hours: {selectedVenue.operatinghours}</p></strong></li>
//                     <li><strong><p>Cost per Hour : {selectedVenue.costperhour}</p></strong></li>
//                   </ul>
//                 </div>

//                 <div className="button-container">
//                   <button onClick={handleLeaveReviewClick}>Leave a Review</button>
//                   <button onClick={handleBookVenueClick}>Book Venue</button>
//                 </div>
//               </>
//             )


//     </>
//   );
// };

// export default Ad_Venue_Manager_Details; // Ensure this line is present new code below


// import { NavLink } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import './Ad_Venue_Manager_Details.css'; // Ensure this CSS file is created
// import Sidebar from '../Admin Sidebar/AdSideBar'; // Ensure this path is correct

// const Ad_Venue_Manager_Details = () => {
//     const [data, setData] = useState([]); // To store manager data
//     const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
//     const [message, setMessage] = useState(''); // To store delete message

//     // Fetch the manager data
//     useEffect(() => {
//         const fetchManagers = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/managers');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch managers');
//                 }
//                 const result = await response.json();
//                 console.log("Manager data fetched: ", result);
//                 setData(result);
//             } catch (error) {
//                 console.error("Error fetching manager data:", error);
//             }
//         };

//         fetchManagers();
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
//             const response = await fetch(`http://localhost:5000/api/managers/username/${username}`, {
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
//             <h1 className="venue-title">VenueVista</h1>
//             <Sidebar />
//             <div className="user-details-container">
//                 <h1>Venue Manager List</h1>

//                 <div className="customer-header">
//                     <div className="header-item">Username</div>
//                     <div className="header-item">Name</div>
//                     <div className="header-item">Phone No</div>
//                 </div>

//                 {data.length === 0 ? (
//                     <p>Loading managers...</p>
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
//                                 .filter(([key]) => key !== '_id' && key !== 'password') // Exclude fields not to display
//                                 .map(([key, value]) => (
//                                     <div className="input-group" key={key}>
//                                         <label>
//                                             <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
//                                         </label>
//                                         <input
//                                             type={key === 'email' ? 'email' : 'text'} // Set input type based on field
//                                             value={value} // Directly use the value
//                                             readOnly
//                                         />
//                                     </div>
//                                 ))}
//                         </div>
//                         <button className="delete-button" onClick={() => deleteUser(selectedUser.username)}>
//                             Delete Manager
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Ad_Venue_Manager_Details;
import { NavLink } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import './Ad_Venue_Manager_Details.css';
// import Sidebar from '../Admin Sidebar/AdSideBar';

// const Ad_Venue_Manager_Details = () => {
//     const [data, setData] = useState([]); // To store manager data
//     const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
//     const [venueData, setVenueData] = useState(null); // To store fetched venue data
//     const [message, setMessage] = useState(''); // To store delete message

//     // Fetch the manager data
//     useEffect(() => {
//         const fetchManagers = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/managers');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch managers');
//                 }
//                 const result = await response.json();
//                 console.log("Manager data fetched: ", result);
//                 setData(result);
//             } catch (error) {
//                 console.error("Error fetching manager data:", error);
//             }
//         };

//         fetchManagers();
//     }, []);

//     const handleUserClick = async (user) => {
//         console.log("User clicked: ", user);
//         setSelectedUser(user);
//         setMessage('');

//         // Fetch venue details based on the manager's venueName
//         try {
//             const response = await fetch(`http://localhost:5000/api/venues/manager/${user.username}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch venue details');
//             }
//             const venue = await response.json();
//             setVenueData(venue);
//         } catch (error) {
//             console.error("Error fetching venue data:", error);
//             setVenueData(null);
//         }
//     };

//     const closeModal = () => {
//         setSelectedUser(null);
//         setVenueData(null);
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
//             const response = await fetch(`http://localhost:5000/api/managers/username/${username}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 setData(data.filter(user => user.username !== username));
//                 setMessage('User deleted successfully!');
//                 closeModal(); // Close the modal after deletion
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
//             <h1 className="venue-title">VenueVista</h1>
//             <Sidebar />
//             <div className="user-details-container">
//                 <h1>Venue Manager List</h1>

//                 <div className="customer-header">
//                     <div className="header-item">Username</div>
//                     <div className="header-item">Name</div>
//                     <div className="header-item">Phone No</div>
//                 </div>

//                 {data.length === 0 ? (
//                     <p>Loading managers...</p>
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
//                                 .filter(([key]) => key !== '_id' && key !== 'password') // Exclude fields not to display
//                                 .map(([key, value]) => (
//                                     <div className="input-group" key={key}>
//                                         <label>
//                                             <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
//                                         </label>
//                                         <input
//                                             type={key === 'email' ? 'email' : 'text'} // Set input type based on field
//                                             value={value} // Directly use the value
//                                             readOnly
//                                         />
//                                     </div>
//                                 ))}
//                         </div>
//                         {venueData && (
//                             <div className="venue-details">
//                                 <h3>Venue Details:</h3>
//                                 <p><strong>Venue Name:</strong> {venueData.venueName}</p>
//                                 <p><strong>Address:</strong> {venueData.venueAddress}</p>
//                                 <p><strong>Price:</strong> {venueData.price}</p>
//                                 <p><strong>Additional Services:</strong> {venueData.additionalServices.join(', ')}</p>
//                             </div>
//                         )}
//                         <button className="delete-button" onClick={() => deleteUser(selectedUser.username)}>
//                             Delete Manager
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Ad_Venue_Manager_Details;

import React, { useState, useEffect } from 'react';
import './Ad_Venue_Manager_Details.css';
import Sidebar from '../Admin Sidebar/AdSideBar';

const Ad_Venue_Manager_Details = () => {
    const [data, setData] = useState([]); // To store manager data
    const [selectedUser, setSelectedUser] = useState(null); // To store selected user details
    const [venueData, setVenueData] = useState(null); // To store fetched venue data
    const [message, setMessage] = useState(''); // To store delete message

    // Fetch the manager data
    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/managers');
                if (!response.ok) {
                    throw new Error('Failed to fetch managers');
                }
                const result = await response.json();
                console.log("Manager data fetched: ", result);
                setData(result);
            } catch (error) {
                console.error("Error fetching manager data:", error);
            }
        };

        fetchManagers();
    }, []);

    const handleUserClick = async (user,venueName) => {
        console.log("User clicked: ", user);
        console.log("use",venueName);
        setSelectedUser(user);
        setMessage('');

        // Fetch venue details based on the venueName from the user
        try {
            const response = await fetch(`http://localhost:5000/api/venue/venueName/${user.venueName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch venue details');
            }
            const venue = await response.json();
            setVenueData(venue);
        } catch (error) {
            console.error("Error fetching venue data:", error);
            setVenueData(null);
        }
    };

    const closeModal = () => {
        setSelectedUser(null);
        setVenueData(null);
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
            const response = await fetch(`http://localhost:5000/api/managers/username/${username}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setData(data.filter(user => user.username !== username));
                setMessage('User deleted successfully!');
                closeModal(); // Close the modal after deletion
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
                <h1>Venue Manager List</h1>

                <div className="customer-header">
                    <div className="header-item">Username</div>
                    <div className="header-item">Name</div>
                    <div className="header-item">Venue Name</div>
                </div>

                {data.length === 0 ? (
                    <p>Loading managers...</p>
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
                                <div className="customer-item">{user.venueName}</div>
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
                                .filter(([key]) => key !== '_id' && key !== 'password') // Exclude fields not to display
                                .map(([key, value]) => (
                                    <div className="input-group" key={key}>
                                        <label>
                                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                                        </label>
                                        <input
                                            type={key === 'email' ? 'email' : 'text'}
                                            value={value}
                                            readOnly
                                        />
                                    </div>
                                ))}
                        </div>
                        {venueData && (
                            <div className="venue-details">
                                <h3>Venue Details:</h3>
                                <p><strong>Venue Name:</strong> {venueData.venueName}</p>
                                <p><strong>Address:</strong> {venueData.venueAddress}</p>
                                <p><strong>Price:</strong> ${venueData.price}</p>
                                <p><strong>Additional Services:</strong> {venueData.additionalServices.join(', ')}</p>
                            </div>
                        )}
                        <button className="delete-button" onClick={() => deleteUser(selectedUser.username)}>
                            Delete Manager
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Ad_Venue_Manager_Details;
