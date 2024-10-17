import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Initial_page from './Initial Page/Initial_page';
import User_Booking_History from './2-User/User Booking History/User_Booking_History'
import User_Home_Page from './2-User/User Home Page/User_Home_Page';
import User_Personal_Details from './2-User/User Personal Details/User_Personal_Details';
import User_Review from './2-User/User Review/User_Review';
// import LoginPage from './6-Login Page/Login_Page';
// import RegisterPage from './7-Register Page/Register_Page';
import Contact_Admin from './2-User/User Contact Admin/Contact_Admin[1]';
import Admin_Homepage from './1-Admin/Admin Home Page/Admin_Homepage.jsx';

// import LoginPage from './6-Login Page/Login_Page';

// import RegisterManager from '../7-Register Page/Manager Register Page/Manager_Register.jsx';
// import RegisterPage from '../7-Register Page/User Register Page/User_Register.jsx';

import Ad_Venue_Review from './1-Admin/Admin Venue Review/Ad_Venue_Review.jsx';
import Ad_User_Review from './1-Admin/Admin User Review/Ad_User_Review.jsx';
import Ad_Venue_Manager_Details from './1-Admin/Admin Venue Manager Details/Ad_Venue_Manager_Details.jsx';
import Ad_User_Details from './1-Admin/Admin User Details/Ad_User_Details.jsx';
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to render Initial_page when visiting '/' */}
        <Route path="/" element={<Initial_page />} />
        
        {/* Other routes */}
        <Route path="/home" element={<User_Home_Page />} />
        <Route path="/booking-history" element={<User_Booking_History />} />
        <Route path="/contact-admin" element={<Contact_Admin />} />
        <Route path="/my-details" element={<User_Personal_Details />} />
        <Route path="/leave-review" element={<User_Review />} />
        <Route path="/AdminHome" element={<Admin_Homepage/>} />


        {/* Defining Admin Routes */}

        <Route path="/view-reviews" element={<Ad_Venue_Review/>}></Route>
        <Route path="/view-customer-details" element={<Ad_User_Review/>}></Route>
        <Route path="/view-venue-details" element={<Ad_Venue_Manager_Details/>}></Route>
        <Route path="/view-user-details" element={<Ad_User_Details/>}></Route>
        {/* Incorrect name for the component but cannot be bothered to change it now. */}

        {/* <Route path="/admin-home" element={Admin_Homepage}></Route> */}
        
        {/* Redirect any unknown routes to the initial page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

