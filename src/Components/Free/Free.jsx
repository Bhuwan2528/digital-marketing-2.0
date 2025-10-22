import React from "react";
import './Free.css';
import bonus1Img from '../../assets/offer.png'; // example image

const bonuses = [
  {
    title: "Bonus 1",
    subtitle: "Get 1 Year of Fast & Secure Domain Hosting for Your Website",
    img: bonus1Img,
    price: "₹10,000",
  },
  {
    title: "Bonus 2",
    subtitle: "Unlock Professional Design Tools with Canva Pro",
    img: bonus1Img,
    price: "₹4,000",
  },
  {
    title: "Bonus 3",
    subtitle: "Access Advanced Marketing Tools for Better Results",
    img: bonus1Img,
    price: "₹11,500",
  },
  {
    title: "Bonus 4",
    subtitle: "WhatsApp Marketing Software for Smarter Campaigns",
    img: bonus1Img,
    price: "₹3,000",
  },
  {
    title: "Bonus 5",
    subtitle: "Detailed Notes for everything learnt in the Workshop for reference",
    img: bonus1Img,
    price: "₹3,500",
  },
  {
    title: "Bonus 6",
    subtitle: "Promote & Earn Seamlessly with Our Affiliate Platform",
    img: bonus1Img,
    price: "₹3,500",
  },
];


const Free = () => {
  return (
    <div className="free-section">
      <h2>Unlock bonuses worth <span className="highlight">₹17,500</span> for FREE</h2>
      <p>Attend the workshop to receive exclusive access to our bonuses.</p>

      <div className="free-cards">
        {bonuses.map((bonus, idx) => (
          <div className="free-card" key={idx}>
            <div className="free-card-top">
              <span className="bonus-title">{bonus.title}</span>
            </div>

            <div className="free-card-details">
                <div className="card-subtitle">{bonus.subtitle}</div>

                <div className="card-image">
                <img src={bonus.img} alt={bonus.title} />   {/* 👈 YEHI LINE IMAGE DIKHA RAHI HAI */}
                </div>

                <div className="card-bottom">
                <span className="original-price">{bonus.price}</span>
                <span className="free-tag">FREE GIFT</span>
                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Free;
