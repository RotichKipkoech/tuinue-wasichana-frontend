// components/Charities.js
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 
import "./Charities.css";

const Charities = () => {
  const charities = [
    {
      name: "Days for Girls",
      description:
        "Days for Girls is a global organization that aims to increase access to menstrual care and education for girls and women. They provide sustainable, reusable menstrual hygiene kits to girls and women in need around the world.",
      image:
        "https://media.istockphoto.com/id/184322174/photo/portrait-in-sepia-of-an-african-girl-with-inquisitive-eyes.jpg?s=612x612&w=0&k=20&c=6bBlPeZfgOlkZFFJ_cxmZR22r_OWyA5NC6pFUTAcTiY=",
      link: "/donate/charity1",
    },
    {
      name: "Huru International",
      description:
        "Huru International focuses on providing reusable, sustainable menstrual products to girls and women in underserved communities, particularly in Africa. They offer Huru Kits, which include reusable pads and menstrual health education.",
      image: "https://uicookies.com/demo/theme/charity/img/img_sm_2.jpg",
      link: "/donate/charity2",
    },
    {
      name: "ZanaAfrica Foundation",
      description:
        "The ZanaAfrica Foundation is dedicated to empowering adolescent girls in Kenya through education, health, and hygiene programs. They provide girls with access to sanitary pads and support comprehensive menstrual health education.",
      image: "https://uicookies.com/demo/theme/charity/img/img_sm_3.jpg",
      link: "/donate/charity3",
    },
  ];

  return (
    <div className="charities-section" id="charities-section">
    <div className="charities-overlap-group" id="charities-overlap-group">
      <div className="charities-heading-tuinue" id="charities-heading-tuinue">CHARITIES</div>
      <p className="charities-heading-together" id="charities-heading-together">Together we can make a difference</p>
    </div>

    <div className="charities-list" id="charities-list">
      <h2>Charities to Donate To:</h2>
      <ul>
        {charities.map((charity, index) => (
          <li key={index} className="charity-entry" id={`charity-entry-${index}`}>
            <img src={charity.image} alt={charity.name} />
            <div>
              <h3>{charity.name}</h3>
              <p>{charity.description}</p>
              <Link to="/DonationPage">
               <div className="text-wrapper">Donate</div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default Charities;
