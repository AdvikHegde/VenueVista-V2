import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import './Initial_page.css'; // Import specific styles


// Importing images
import image1 from '../images/venue-1.jpg';
import image2 from '../images/venue-2.jpg';
import image3 from '../images/venue-3.jpg';
import image4 from '../images/venue-4.jpg';
import image5 from '../images/venue-5.jpg';
import image6 from '../images/venue-6.jpg';
import myaccount from '../images/my-account.png';

// Importing components
import LoginPage from '../Login Page/Login_Page.jsx';
import RegisterManager from '../Register Page/Manager Register Page/Manager_Register.jsx';
import RegisterPage from '../Register Page/User Register Page/Register_Page.jsx';

function Initial_page() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isManager, setIsManager] = useState(false); // Track if user is a manager
  const [isUser, setIsUser] = useState(false); // Track if user is a user
  // const [isVisible, setIsVisible] = useState(true); // Manage form visibility
  // Toggle login modal visibility
  // const toggleLogin = () => {
  //   setShowLogin(!showLogin);
  //   if (showRegister) setShowRegister(false); // Ensure register modal is closed
  // };

  // // Toggle register modal visibility
  // const toggleRegister = () => {
  //   setShowRegister(!showRegister);
  //   if (showLogin) setShowLogin(false); // Ensure login modal is closed
  // };

  // Handle login action
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  // Handle the change in registration type (manager or user)
  const handleRegisterTypeChange = (event) => {
    const selectedValue = event.target.value;
    setIsManager(selectedValue === 'manager');
    setIsUser(selectedValue === 'user');
  };

  // Handle close register modal
  const handleClose = () => {
    setShowRegister(false);
    setIsManager(false); // Reset manager state when closing registration
    setIsUser(false);    // Reset user state when closing registration
  };

  // const handleClose = () => {
  //   setIsVisible(false); // Simply hide the form without reloading or navigating
  // };

  // if (!isVisible) return null; // Do not render the component if it's not visible

  // JSX Rendering
  return (
    <>
      <div className="website-header">
        <div className="my-account">
          <img src={myaccount} alt="My Account" />
        </div>

        <div className="booking-history">5</div>

        {/* <div className="website-name-container">
          <h2 className="website-name">Venue Vista</h2>
        </div> */}




        {!isLoggedIn ? (
          <>
            <div className="login-button-container">
              <button
                className="login-button"
                onClick={() => {
                  setShowLogin(true);
                  setShowRegister(false); // Ensure only Login is open
                }}
              >
                Login
              </button>
            </div>

            <div className="register-button-container">
              <button
                className="register-button"
                onClick={() => {
                  setShowRegister(true);
                  setShowLogin(false); // Ensure only Register is open
                }}
              >
                Register
              </button>
            </div>

            {/* Conditional rendering of LoginPage */}
            {showLogin && (
              <LoginPage
                onLogin={handleLogin}
                onClose={() => setShowLogin(false)} // Close Login modal
              />
            )}

            {/* Conditional rendering of Register block */}
            {showRegister && (
              <div className="register-block">
                <h2>Select Registration Type</h2>
                <select onChange={handleRegisterTypeChange}>
                  <option value="">Select</option>
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                </select>
                <button onClick={handleClose}>Close</button> {/* Close button to hide the form */}
                {/* Conditionally render RegisterManager or RegisterPage based on selection */}
                {isManager && <RegisterManager onClose={handleClose} />}
                {isUser && <RegisterPage onClose={handleClose} />}
                

              </div>
            )}
          </>
        ) : (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/booking-history">Booking History</NavLink>
            <NavLink to="/my-details">My Details</NavLink>
            <NavLink to="/leave-review">Leave a Review</NavLink>
          </>
        )}
      </div>

      <h2 className="welcome-message">Welcome to Venue Vista</h2>

     <div className="venues-container-initial-page">
       {/* Venue 1 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image1} alt="Venue 1" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 2 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image2} alt="Venue 2" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 3 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image3} alt="Venue 3" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 4 */}
       {/* <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image4} alt="Venue 4" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div> */}
     </div>

     <div className="venues-container-initial-page">
       {/* Venue 1 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image4} alt="Venue 1" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 2 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image1} alt="Venue 2" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 3 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image3} alt="Venue 3" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 4 */}
       {/* <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image4} alt="Venue 4" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div> */}
     </div>

     <div className="venues-container-initial-page">
       {/* Venue 1 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image3} alt="Venue 1" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 2 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image2} alt="Venue 2" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 3 */}
       <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image4} alt="Venue 3" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div>
 
       {/* Venue 4 */}
       {/* <div className="venue-initial-page">
         <div className="venue-image-container">
           <img className="venue-images" src={image4} alt="Venue 4" />
         </div>
         <div className="venue-description">
           <h2 className="venue-name-initial-page">Venue Name</h2>
           <ul className="venue-rating-reviews-container">
             <li>Rating: 4.7 stars</li>
             <li>Reviews: 100</li>
           </ul>
           <p className="initial-page-contact">Contact: 9820896465</p>
           <p className="initial-page-address">Mulund West, Mumbai</p>
         </div>
       </div> */}
     </div>

    </>
  );
}

export default Initial_page;
