import React from "react";

const Home = () => {
  return (
    <>
      <div className="quotes">
        <div className="home-header">
          <div className="quote-text">REQUESTED QUOTES</div>
          <div className="number-of-quotes">14</div>
        </div>

        <div className="home-header">
          <div className="quote-text">RECEIVED QUOTATIONS</div>
          <div className="number-of-quotes">13</div>
        </div>
      </div>
      <div className="rfq-button-container">
        <button
          style={{ background: "#02838B" }}
          className="rfq-button"
          onClick={() => {
            alert("Clicked");
          }}
        >
          Add RFQ
        </button>
      </div>

      <div className="nav-container">
        <div className="nav-button">My RFQs</div>
        <div className="nav-button">Quotations</div>
      </div>

      <div className="search-button">
        <input className="search-input" type="text" placeholder="Search" />
      </div>
      <div className="product-details-container">
        <div className="product-details">
          <p className="details-text ">#14</p>
          <p className="details-text product-date ">Date</p>
          <p className="enquiry-container product-enquiry">Enquiry raised</p>
          <div></div>
        </div>
        <divv className="product-type">Product Type</divv>
        <div className="product-length">1000 mtr</div>

      </div>
    </>
  );
};

export default Home;
