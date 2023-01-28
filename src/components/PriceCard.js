import React from "react";
import { Link } from "react-router-dom";
import "./PriceCard.css";

function PriceCard() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> - Basic - </h3>
          <span className="bar"> </span>
          <p className="btc">₹599</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3> - Premium - </h3>
          <span className="bar"> </span>
          <p className="btc">₹699</p>
          <p>- 5 Days -</p>
          <p>- 10 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3> - Golden - </h3>
          <span className="bar"> </span>
          <p className="btc">₹999</p>
          <p>- 30 Days -</p>
          <p>- 30 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
