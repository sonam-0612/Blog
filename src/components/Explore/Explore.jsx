import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Explore.css';
import ImageData from './destinationData'; // Adjust the image sources

const Explore = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    ImageData.map(() => 0) // Initializing with index 0 for each place
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => 
          ImageData[i].image.length ? (index + 1) % ImageData[i].image.length : 0 // Correct usage of 'image' instead of 'images'
        )
      );
    }, 4000); // Change images every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div className="explore-container">
      <h2>Explore Amazing Places</h2>
      <div className="image-gallery">
        {ImageData.map((place, index) => (
          <div key={place.id} className={`image-card ${index === currentImageIndexes[index] ? 'active' : ''}`}>
            {/* Ensure that the images array exists before rendering */}
            {place.image && place.image.length > 0 && (
              <img
                src={place.image[currentImageIndexes[index]]} // Ensure the 'images' array exists
                alt={place.alt}
                className="image"
              />
            )}
            <p>{place.description}</p>
            <Link to={`/explore/${place.id}`}>
              <button className="explore-button">Explore {place.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
