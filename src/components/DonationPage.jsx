// components/DonationPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { donate } from '../actions/donorActions';
import "./DonationPage.css";

const DonationPage = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonation = () => {
    const donationData = {
      phoneNumber: phoneNumber,
      donationAmount: donationAmount,
    };

    dispatch(donate(donationData)); // Dispatch the donate action
  };

  return (
    <div className="donation-form">
      <h2>Donate Now</h2>
      <label>Phone Number:</label>
      <input
        className="donation-input"
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter your phone number"
      />

      <label>Donation Amount:</label>
      <input
        className="donation-input"
        type="number"
        value={donationAmount}
        onChange={handleDonationAmountChange}
        placeholder="Enter donation amount"
      />

      <button className="donation-button" onClick={handleDonation}>
        Donate Now
      </button>
    </div>
  );
};

export default DonationPage;
