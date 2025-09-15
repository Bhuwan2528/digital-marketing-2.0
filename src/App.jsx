import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import "./App.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2 sec baad popup open
    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div>
      {/* Background content */}
      <div className={`main-container ${showPopup ? "blurred" : ""}`}>
        <Header openPopup={openPopup} />
        
      </div>

      {/* Popup ab main-container ke bahar hai */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>
            <h2>Fill this Form & get a Call Now</h2>
            <form>
              <input type="text" placeholder="Enter Your Name" required />
              <input type="number" placeholder="Enter Your Number" required />
              {/* <input type="email" placeholder="Enter Your Email" required /> */}
              <input type="text" placeholder="Enter Your City" required />
              <button className="submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
