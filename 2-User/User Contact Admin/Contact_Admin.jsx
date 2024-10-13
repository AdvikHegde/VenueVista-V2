import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Contact_Admin.css'
import Sidebar from '../User Sidebar/Sidebar';

import whatsappImage from './whatsapp.png'
import gmailImage from './gmail.png'

import backgroundImage from './contact-us.png'

function Contact_Admin() {
  return (
    <>
      <Sidebar/>
      
      <div className="contact-admin-body">
        <div class="contact-admin-title">
          <h1>Contact Admin</h1>
        </div>

        <div class="contact-admin-description">
          <p> 
            We're here to help you out!
            If you have any issues,concerns,or feedback,feel free to reach out to our admin team. We're dedicated to resolving your problems as quickly as possible.
          </p>
        </div>
        
        <div className="background-image-container">
          <img src={backgroundImage} alt="" />
        </div>


        <div className="contact-admin-mail-contact">
          <div className="admin-mail">
            <h2>Whatsapp</h2>
            <a href=""><img src={whatsappImage} alt="" /></a> 
          </div>
            
          <div className="admin-contact">
            <h2>Mail</h2>
            <a href=""><img src={gmailImage} alt="" /></a>
          </div>
        </div>

        <div className="note-for-users">
          <p>Note : Kindly be patient while awaiting a response,we are trying to get back to you as soon as possible.</p>
        </div>
      </div>
    </>
  );
}

export default Contact_Admin;
