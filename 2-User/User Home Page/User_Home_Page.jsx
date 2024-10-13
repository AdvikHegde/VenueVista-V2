import { NavLink } from 'react-router-dom';
import './User_Home_Page.css';
import Sidebar from '../User Sidebar/Sidebar';
import React,{ useState, useEffect ,useCallback} from 'react';
import profileimage from '../User Personal Details/user.png';

import person1 from './person1.jpeg'
import person2 from './person2.jpeg'
import person3 from './person3.jpeg'


function User_Home_Page() {
  const [data, setData] = useState([]); // Venue data
  const [selectedVenue, setSelectedVenue] = useState(null); // Selected venue for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isReviewMode, setIsReviewMode] = useState(false); // State to track review mode

  const [venueData, setVenueData] = useState(null); // Venue data
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [selectedVenueId, setSelectedVenueId] = useState(null); // Selected venue ID

  const [isBookingDivOpen, setIsBookingDivOpen] = useState(false);
  const [isBookingMode, setIsBookingMode] = useState(false); // State to track booking mode


  const [bookingDetails, setBookingDetails] = useState(null); // State to store booking details





  //ALL FUNCTIONS FROM USER REVIEW COPY PASTED HERE
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

  // Handle review submission
  const handleReviewSubmit = async () => {
    if (text.trim() && rating && venueData) {
      try {
        const response = await fetch("http://localhost:5000/api/addReview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,     // Review text
            rating,   // Rating
            venueId: venueData.venueId,  // Dynamic venue ID
            venueName: venueData.venueName,  // Venue Name
            venueLocation: venueData.venueLocation  // Venue Location
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message); // Display success message
          setText(''); // Clear textarea after submission
          setRating(null); // Clear rating after submission
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error adding review:', error);
        alert('Failed to add review');
      }
    } else {
      alert('Please enter a review, select a rating, and ensure venue details are loaded.');
    }
  };

  // Memoize text input change handler
  const handleTextChange = useCallback((e) => {
    if (e.target.value !== text) {
      setText(e.target.value);
    }
  }, [text]);

  // Component to render venue details
  const VenueDetails = ({ venueData }) => {
    return (
      <div className="venue-information">
        <img src={venueData.imageUrl} alt={venueData.venueName} />
        <p>{venueData.venueId}</p>
        <p>{venueData.venueName}</p>
        <p>{venueData.venueLocation}</p>
      </div>
    );
  };

  // Component to display reviews for a specific venue
  const VenueReviews = React.memo(({ venueId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await fetch(`http://localhost:5000/reviews/${venueId}`);
          const data = await response.json();
          setReviews(data); // Set fetched reviews to state
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };

      fetchReviews();
      console.log(reviews);
    }, [venueId]);

    return (
      <div>
        <h3>Reviews for Venue {venueId}</h3>
        {reviews.length > 0 ? (
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review._id} className="review-card">
                <div className="profile-image-container">
                  <img className="profile-image" src={profileimage} alt="" />
                </div>
                <div className="review-content-footer-container">
                  <div className="review-content">
                    <p className="review-text">{review.text}</p>
                    <div className="review-rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className={index < review.rating ? 'star filled' : 'star'}>
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="review-footer">
                    <p>Venue: {review.venueName}</p>
                    <p>Location: {review.venueLocation}</p>
                    <p>Reviewed on: {new Date(review.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='no-review-display'>No reviews found for this venue.</p>
        )}
      </div>
    );
  });


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

  // Open modal with selected venue
  const openModal = (venue) => {
    console.log(venue);
    setSelectedVenue(venue);
    setSelectedVenueId(venue.venueId);

    setIsModalOpen(true);
    setIsReviewMode(false); // Reset to venue details
    setIsBookingMode(false); // Reset to venue details
  };

  useEffect(() => {
    if (selectedVenueId) {
      // console.log(selectedVenueId);
      // Perform any actions that depend on selectedVenueId here
      fetchVenueDetails(selectedVenueId);
      console.log(selectedVenueId);
    }
  }, [selectedVenueId]); // Runs whenever selectedVenueId changes

  // Close modal when clicking outside of the modal content
  const closeModal = (e) => {
    if (e.target.className === 'modal') {
      setIsModalOpen(false);
      setIsReviewMode(false); // Reset to venue details when closed
      setIsBookingMode(false); // Reset to venue details when closed
    }
  };

  // Handle review button click
  const handleLeaveReviewClick = () => {
    setIsReviewMode(true); // Switch to review mode
    // console.log(venueData);
  };

  const openBookingDiv = () => {
    setIsBookingDivOpen(true);
  };

  const closeBookingDiv = (e) => {
    if (e.target.className === 'booking-div') {
      setIsBookingDivOpen(false);
    }
  };

  const handleBookVenueClick = () => {
    setIsBookingMode(true); // Switch to booking mode
  };

  

  const handleSubmit = async () => {
    const bookingDetails = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      duration: document.getElementById('duration').value,
      guestCount: document.querySelector('input[placeholder="Enter your text here"]').value, // Adjust this query for guest count
      budget: document.querySelector('input[placeholder="Enter your text here"]').value, // Adjust this query for budget
      catering: document.getElementById('catering').checked,
      additionalRequests: document.querySelector('.additional-requests input').value,
    };
    setBookingDetails(bookingDetails);
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });
  
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit booking');
    }

    
  };

  const renderReceipt = () => {
    if (!bookingDetails) return null; // Don't render if booking details are not set
    console.log(bookingDetails);
    return (
      <div className="booking-receipt">
        <h2>Booking Confirmation Details</h2>
        <p><strong>Name:</strong> {bookingDetails.name}</p>
        <p><strong>Phone:</strong> {bookingDetails.phone}</p>
        <p><strong>Email:</strong> {bookingDetails.email}</p>
        <p><strong>Date:</strong> {bookingDetails.date}</p>
        <p><strong>Time:</strong> {bookingDetails.time}</p>
        <p><strong>Duration:</strong> {bookingDetails.duration} hours</p>
        <p><strong>Guest Count:</strong> {bookingDetails.guestCount}</p>
        <p><strong>Budget:</strong> {bookingDetails.budget}</p>
        <p><strong>Catering:</strong> {bookingDetails.catering ? 'Yes' : 'No'}</p>
        <p><strong>Additional Requests:</strong> {bookingDetails.additionalRequests}</p>
      </div>
    );
  };



  return (
    <>
      <Sidebar />

      <div className="venues-container">
        {/* Dynamically map through data and create a card for each venue */}

        {data.length > 0 ? (
          data.map((venue) => (
            <div
              className="venue-card"
              key={venue._id}
              onClick={() => openModal(venue)} // Open modal on click
            >
              <img src={venue.imageUrl} alt={venue.name} className="venue-image" />
              <div className="venue-details">
                <h3 className="venue-name">{venue.venueName}</h3>
                <p className="venue-address">{venue.venueLocation}</p>

                <div className="venue-additional-information">
                  <p>Contact Us: {venue.contact}</p>
                  <p>Our Capacity : {venue.capacity}</p>
                  <p>Our Hours : {venue.operatinghours}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No venues available</p>
        )}
      </div>

      {/* Booking Div */}
      {/*
      {isBookingDivOpen && (
        <div className="booking-div" onClick={closeBookingDiv}>
          <div className="booking-content">
            <h2>Booking Information</h2>
            <p>Please complete your booking...</p>
          </div>
        </div>
      )}
      */}

      {/* Modal for displaying venue details */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>

            {isReviewMode ? (
              <div>
                {/* <h2>Leave a Review for {selectedVenue.venueName}</h2>
                <textarea placeholder="Write your review here..." rows="5" />
                <button onClick={() => alert('Review submitted!')}>Submit Review</button>
                <button onClick={() => setIsReviewMode(false)}>Back to Venue Details</button> */}
                <VenueDetails venueData={venueData} />

                <div className="review-writing-div">
                  <textarea
                    id="review"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Leave your review about the place here..."
                  />
                  <div className="star-rating-container">
                    <h2>How would you rate your experience here?</h2>
                    <div className="star-rating">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <React.Fragment key={star}>
                          <input
                            type="radio"
                            id={`star${star}`}
                            name="rating"
                            value={star}
                            onChange={() => setRating(star)}
                          />
                          <label htmlFor={`star${star}`} title={`${star} stars`}>
                            &#9733;
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <button id="submit" onClick={handleReviewSubmit}>
                    Submit Review
                  </button>
                </div>
                
                {selectedVenueId && <VenueReviews venueId={selectedVenueId} />}
              </div>
            ): isBookingMode ? (
              // Replace the content with an empty div when in booking mode
              <div className="booking-form">
                {/* You can customize this empty div further as needed */}
                <p>Please fill in the booking details below...</p>
                <h2>Book the Venue</h2>
  
                <div className="user-input-information">
                  <label htmlFor="date">Booking Date:</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required 
                  />

                  <label htmlFor="time">Booking Time:</label>
                  <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    required 
                  />

                  <label htmlFor="duration">Duration :</label>
                  <input 
                    type="number" 
                    id="duration" 
                    name="duration" 
                    min="1" 
                    required 
                    placeholder="Enter duration in hours"
                  />
                </div>

                <div className="user-input-information">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required placeholder="Enter your name"/>

                  <label for="phone">Contact :</label>
                  <input type="tel" id="phone" name="phone" required placeholder="Enter your Contact"></input>

                  <label for="email">Email :</label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email address"></input>
                </div>

                <div className="user-input-information-row3">
                  <label>Guest Count : </label>
                  <input 
                      type="text" 
                      // id="stringInput"     
                      // name="stringInput"   
                      placeholder="Enter your text here"  
                      required              
                  />

                  <label>Budget : </label>
                  <input 
                      type="number" 
                      // id="stringInput"     
                      // name="stringInput"   
                      placeholder="Enter your text here"                      
                  />
                </div>

                <div className="catering-checkbox">
                  <label htmlFor="catering" className="catering-checkbox-label">
                    <input type="checkbox" id="catering" name="catering"/>
                    Wish to add on offered catering services (Your choice wil be notified to the Venue Manager.)
                  </label>
                </div>

                <section class="coordinator-section">
                  <h2>Meet Our Venue Coordinators</h2>
                  <p class="description">
                      Our platform provides you with access to our trusted venue coordinators who are ready to assist you
                      personally with event management. Whether you're planning a wedding, corporate event, or any special
                      occasion, our coordinators will help ensure that everything runs smoothly.
                  </p>
                  <div class="coordinator-container">
                      <div class="coordinator-card">
                          <img src={person1} alt="Coordinator 1" class="coordinator-img"/>
                          <h3>Varun Thakur</h3>
                          <p>Senior Event Coordinator</p>
                      </div>
                      <div class="coordinator-card">
                          <img src={person2} alt="Coordinator 2" class="coordinator-img"/>
                          <h3>Kautuk Srivastava</h3>
                          <p>Assistant Event Manager</p>
                      </div>
                      <div class="coordinator-card">
                          <img src={person3} alt="Coordinator 3" class="coordinator-img"/>
                          <h3>Aadar Malik</h3>
                          <p>Event Planner</p>
                      </div>

                      <div class="checkbox-container">
                        <input type="checkbox" id="assist-checkbox" className="checkbox-container-input"/>
                        <label for="assist-checkbox">Are you interested in being assisted by our venue coordinators?</label>
                    </div>
                  </div>
              </section>

                <div className="additional-requests">
                  <input type="text" placeholder="Please add any additional features that you would like to request." />
                </div>

                <div className="button-container">
                  <button 
                    onClick={() => handleSubmit()}
                    // () => alert('Booking Confirmed!')
                    type="button" // Change type to "button" to prevent form submission if you want to handle it manually
                  >
                    Confirm Booking
                  </button>

                </div>
                {renderReceipt()};

                
              </div>
             ) : (
              <>
                <div className="venue-image-container">
                  <img src={selectedVenue.imageUrl} alt={selectedVenue.venueName} className="modal-venue-image" />
                </div>

                <h2>{selectedVenue.venueName}</h2>

                <p className="venue-description-for-each-card">{selectedVenue.description}</p>

                <div className="venue-information-container">
                  <h2>Information Overview</h2>
                  <ul>
                    <li><strong><p>Location : {selectedVenue.venueLocation}</p></strong></li>
                    <li><strong><p>Contact: {selectedVenue.contact}</p></strong></li>
                    <li><strong><p>Capacity: {selectedVenue.capacity}</p></strong></li>
                    <li><strong><p>Operating Hours: {selectedVenue.operatinghours}</p></strong></li>
                    <li><strong><p>Cost per Hour : {selectedVenue.costperhour}</p></strong></li>
                  </ul>
                </div>

                <div className="button-container">
                  <button onClick={handleLeaveReviewClick}>Leave a Review</button>
                  <button onClick={handleBookVenueClick}>Book Venue</button>
                </div>
              </>
            )}


          </div>
        </div>
      )}
    </>
  );
}

export default User_Home_Page;


