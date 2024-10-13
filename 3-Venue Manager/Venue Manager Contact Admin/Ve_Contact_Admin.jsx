import { NavLink } from 'react-router-dom';


import'./Ve_Contact_Admin.css';
import Sidebar from '../Venue Manager Sidebar/VeSideBar';

import whatsappImage from './whatsapp.png';
import gmailImage from './gmail.png';
import backgroundImage from './contact-us.png';

function Ve_Contact_Admin() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9321781042'; // Replace with the actual phone number
    const message = 'Hello, I need assistance.'; // Replace with the default message
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank'); // Opens WhatsApp in a new tab
  };

  const handleEmailClick = () => {
    const email = '2022.advik.hedge@ves.ac.in'; // Replace with the admin email
    const subject = 'Help Request'; // Default subject
    const body = 'Hello, I need assistance with...'; // Default message

    // Gmail-specific URL
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, '_blank'); // Opens Gmail in a new tab
  };

  return (
    <>
      <Sidebar />
      
      <div className="contact-admin-body">
        <div className="contact-admin-title">
          <h1>Contact Admin</h1>
        </div>

        <div className="contact-admin-description">
          <p> 
            We're here to help you out!
            If you have any issues, concerns, or feedback, feel free to reach out to our admin team. We're dedicated to resolving your problems as quickly as possible.
          </p>
        </div>
        
        <div className="background-image-container">
          <img src={backgroundImage} alt="" />
        </div>

        <div className="contact-admin-mail-contact">
          <div className="admin-mail">
            <h2>Whatsapp</h2>
            <a onClick={handleWhatsAppClick}><img src={whatsappImage} alt="Whatsapp" /></a> 
          </div>
            
          <div className="admin-contact">
            <h2>Mail</h2>
            <a onClick={handleEmailClick}><img src={gmailImage} alt="Mail" /></a>
          </div>
        </div>

        <div className="note-for-users">
          <p>Note: Kindly be patient while awaiting a response, we are trying to get back to you as soon as possible.</p>
           <p> Kindly keep Whatsapp login on Desktop   </p>
        </div>
      </div>
    </>
  );
}

export default Ve_Contact_Admin;
