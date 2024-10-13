import Sidebar from '../Admin Sidebar/AdSideBar';

import '../Admin User Review/Ad_User_Review.css';
import React, { useState, useEffect, useCallback } from 'react';
import backgroundimage from '../../2-User/User Review/customer-feedback.png';
import profileimage from '../../2-User/User Personal Details/user.png';

const Ad_Venue_Review = () => {
  // State for controlling visibility, textarea value, rating, searchVenueId, and selectedVenue
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [searchVenueId, setSearchVenueId] = useState(''); // Search input
  const [selectedVenueId, setSelectedVenueId] = useState(null); // Selected venue ID
  const [venueData, setVenueData] = useState(null); // Venue data

  // Toggle visibility of the review section
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
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

  // Handle search for venue reviews
  const handleSearch = () => {
    if (searchVenueId) {
      setSelectedVenueId(searchVenueId);
      fetchVenueDetails(searchVenueId); // Fetch venue details by searchVenueId
      toggleVisibility(); // Show review section on successful search
    }
  };

  // Handle review submission
  // const handleReviewSubmit = async () => {
  //   if (text.trim() && rating && venueData) {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/addReview", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           text,     // Review text
  //           rating,   // Rating
  //           venueId: venueData.venueId,  // Dynamic venue ID
  //           venueName: venueData.venueName,  // Venue Name
  //           venueLocation: venueData.venueLocation  // Venue Location
  //         }),
  //       });

  //       if (response.ok) {
  //         const result = await response.json();
  //         alert(result.message); // Display success message
  //         setText(''); // Clear textarea after submission
  //         setRating(null); // Clear rating after submission
  //       } else {
  //         const errorData = await response.json();
  //         alert(`Error: ${errorData.error}`);
  //       }
  //     } catch (error) {
  //       console.error('Error adding review:', error);
  //       alert('Failed to add review');
  //     }
  //   } else {
  //     alert('Please enter a review, select a rating, and ensure venue details are loaded.');
  //   }
  // };

  // // Memoize text input change handler
  // const handleTextChange = useCallback((e) => {
  //   if (e.target.value !== text) {
  //     setText(e.target.value);
  //   }
  // }, [text]);

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

  return (
    <div className="review-page-body">
      <Sidebar/>
      <h2>Leave a Review</h2>
      <div className="page-description-container">
        <p>We’d love to hear about your experience! Please take a moment to share your thoughts.</p>
      </div>
      <div className="image-container">
        <img src={backgroundimage} alt="" />
      </div>
      <div className="user-review-body">
        {/* Sidebar */}
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

        {/* Review Section */}
        {/* {isVisible && venueData && (
          <div className="write-review-div">
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
          </div>
        )} */}

        {/* Display fetched reviews */}
        {selectedVenueId && <VenueReviews venueId={selectedVenueId} />}
      </div>
    </div>
  );
};

export default Ad_Venue_Review; // Ensure this line is present


