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

// export default Ad_Venue_Manager_Details; // Ensure this line is present


import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../5-User Review/User_Review.css';
import profileimage from '../4-User Personal Details/user.png';
import './Ad_Venue_Manager_Details.css';
import Sidebar from '../Admin/8-AdSideBar/AdSideBar';

const Ad_Venue_Manager_Details = () => {
  // State for controlling visibility, textarea value, rating, searchVenueId, and selectedVenue
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [searchVenueId, setSearchVenueId] = useState(''); // Search input
  const [selectedVenueId, setSelectedVenueId] = useState(null); // Selected venue ID
  const [venueData, setVenueData] = useState(null); // Venue data
  const [selectedVenue, setSelectedVenue] = useState(null); // Selected venue for modal
  const [data, setData] = useState([]); // Venue data

  // Open modal with selected venue
  const openModal = (venue) => {
    setSelectedVenue(venue);
    setSelectedVenueId(venue.venueId);
    setIsVisible(true);
  };

  // Fetch venue details based on the selected venue ID
  const fetchVenueDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/venues/${id}`);
      if (!response.ok) {
        throw new Error(`Venue not found (Error ${response.status})`);
      }
      const data = await response.json();
      setVenueData(data);
    } catch (error) {
      console.error('Error fetching venue details:', error);
      alert('Venue not found or server error');
    }
  };

  const fetchAllVenues = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/venues'); // Fetch all venues
      if (!response.ok) {
        throw new Error(`Error fetching venues (Error ${response.status})`);
      }
      const data = await response.json();
      setData(data); // Update state with fetched venue data
    } catch (error) {
      console.error('Error fetching venues:', error);
      alert('Error fetching venues or server issue');
    }
  };

  // Use useEffect to fetch venues when component mounts
  useEffect(() => {
    fetchAllVenues();
  }, []); // Empty dependency array to ensure this runs once on component mount

  // Handle search for venue reviews
  const handleSearch = () => {
    if (searchVenueId) {
      setSelectedVenueId(searchVenueId);
      fetchVenueDetails(searchVenueId); // Fetch venue details by searchVenueId
    }
    console.log(selectedVenueId);
    console.log(venueData);
  };

  // Component to render venue details
  const VenueDetails = ({ venueData }) => {
    if (!venueData) {
      return <p>Loading venue details...</p>; // Show loading state
    }
  
    return (
      <div className="venue-information">
        {venueData.imageUrl ? (
          <img src={venueData.imageUrl} alt={venueData.venueName} />
        ) : (
          <p>No image available.</p>
        )}
        <p>{venueData.venueId}</p>
        <p>{venueData.venueName}</p>
        <p>{venueData.venueLocation}</p>
      </div>
    );
  };

  const VenueDisplay = ({ venueData }) => {
    // If venueData is not available, return null or a loading state
    if (!venueData) return null; // Or return a loading message
  
    return (
      <>
        <div className="venue-image-container">
          {venueData.imageUrl ? (
            <img src={venueData.imageUrl} alt={venueData.venueName} className="modal-venue-image" />
          ) : (
            <p>No image available.</p>
          )}
        </div>
        <h2>{venueData.venueName}</h2>
        <p className="venue-description-for-each-card">{venueData.description}</p>
        <div className="venue-information-container">
          <h2>Information Overview</h2>
          <ul>
            <li><strong>Location: </strong>{venueData.venueLocation}</li>
            <li><strong>Contact: </strong>{venueData.contact}</li>
            <li><strong>Capacity: </strong>{venueData.capacity}</li>
            <li><strong>Operating Hours: </strong>{venueData.operatinghours}</li>
            <li><strong>Cost per Hour: </strong>{venueData.costperhour}</li>
          </ul>
        </div>
      </>
    );
  };
  

  return (
    <>
      <Sidebar />

      {/* Search Container */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Venue-ID..."
          className="search-input"
          value={searchVenueId}
          onChange={(e) => setSearchVenueId(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Render Venue Details */}
      {selectedVenueId ? (
        <>
          <VenueDetails venueData={venueData} />
          <VenueDisplay venueData={venueData} />
        </>
      ) : (
        <p></p>
      )}

      
      </>
  );
};

export default Ad_Venue_Manager_Details;

