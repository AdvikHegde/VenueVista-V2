import { NavLink } from 'react-router-dom';
import './Venue_Homepage.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VeSidebar from '../Venue Manager Sidebar/VeSideBar';
import venuemanagerimage from '../../images/venue-manager-image.jpg';

function Venue_Home_Page() {
  const navigate = useNavigate();
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    // Set a timeout to redirect after 10 seconds if not visited
    const timer = setTimeout(() => {
      if (!visited) {
        navigate('/add-venue-latest'); // Replace with your target route
      }
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate, visited]);

  // Function to mark as visited when the component is clicked
  const handleVisit = () => {
    if (!visited) { // Check if not already visited
      setVisited(true); // Mark as visited
      navigate('/add-venue-latest'); // Navigate to the update venue page
    }
  };

  return (
    <div className="page-container">
      <VeSidebar />
      <div className="content">
        <div className="background-image">
          <h1 id="first">VenueVista</h1>
          <section id="home" className="overlay" onClick={handleVisit}>
            <h1>Welcome Dear Manager!</h1>
            <p>We are excited to assist you in managing your venue!</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Venue_Home_Page;
