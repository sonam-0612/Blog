import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationPage.css';
import destinationData from './destinationData'; // Adjust the path as needed

const DestinationPage = () => {
  const { id } = useParams();
  const destination = destinationData.find(dest => dest.id === parseInt(id));
  const [darkMode, setDarkMode] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState(destination.reviews ? [destination.reviews] : []);

  if (!destination) {
    return <div>Destination not found.</div>;
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleReviewSubmit = () => {
    if (newReview) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  return (
    <div className={`destination-page ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <h1>{destination.name}</h1>

      {/* Display the first image */}
      <img src={destination.image[0]} alt={destination.name} className="destination-image" />

      <p>{destination.description}</p>

      <h2>Key Attractions</h2>
      <div className="attractions">
        {destination.attractions.map(attraction => (
          <div key={attraction.id} className="attraction">
            <img src={attraction.image} alt={attraction.name} />
            <h3>{attraction.name}</h3>
            <p>{attraction.description}</p>
            <a href={attraction.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>

      <h2>Travel Tips</h2>
      <p>{destination.travelTips}</p>

      <h2>Location</h2>
      <iframe
        src={destination.mapLink}
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="map-iframe"
      ></iframe>

      <h2>User Reviews</h2>
      <div className="user-reviews">
        {reviews.map((review, index) => (
          <p key={index}>{review}</p>
        ))}
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add a review"
          rows="4"
          className="review-textarea"
        />
        <button onClick={handleReviewSubmit} className="submit-review-btn">Submit Review</button>
      </div>
    </div>
  );
};

export default DestinationPage;
