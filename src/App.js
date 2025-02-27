import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Explore from './components/Explore/Explore'; 
import DestinationPage from './components/Explore/DestinationPage'; 
import destinationData from './components/Explore/destinationData'; 
import './App.css'; // Import any necessary CSS

const App = () => {
  const heroData = [
    { text1: "Discover", text2: "endless possibilities" },
    { text1: "Unleash", text2: "your creativity" },
    { text1: "Experience", text2: "the future today" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <Router>
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <div style={{ position: 'relative', zIndex: 1 }}> {/* Ensures the Navbar and Routes are above the background */}
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Hero
                  setPlayStatus={setPlayStatus}
                  heroData={heroData[heroCount]}
                  heroCount={heroCount}
                  setHeroCount={setHeroCount}
                  playStatus={playStatus}
                />
              }
            />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:id" element={<DestinationPage destinationData={destinationData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
  
};

export default App;
