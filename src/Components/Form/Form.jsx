import React from 'react';
import './Form.css';

const FormSection = () => {
  return (
      <div className="form">
      <div className="form-container">
        <form className="custom-form">

            <div className="form-content">
                {/* <h3>Enroll Now in Our</h3> */}
                {/* <h2>Fill This Form</h2> */}
                {/* <span>Starting From 1st Aug</span> */}
            </div>

          <div className="form-group">
            {/* <label>Name</label> */}
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            {/* <label>Email</label> */}
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            {/* <label>Phone Number</label> */}
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            {/* <label>City</label> */}
            <input type="text" placeholder="Enter your city" />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
