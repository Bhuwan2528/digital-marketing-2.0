import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import "./App.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Enquiry:%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
City: ${formData.city}`;

    const whatsappURL = `https://wa.me/919650539195?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      {/* Background content */}
      <div className={`main-container ${showPopup ? "blurred" : ""}`}>
        <Header openPopup={openPopup} />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">

            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>

            <h2>Fill this Form & get a Call Now</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Number"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                onChange={handleChange}
                required
              />

              <button className="submit" type="submit">
                Submit
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;