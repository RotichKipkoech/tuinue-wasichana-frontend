// components/AnonymousDonor.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnonymousDonor } from '../actions/donorActions';

const AnonymousDonor = () => {
  const dispatch = useDispatch();
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleCheckboxChange = () => {
    setIsAnonymous(!isAnonymous);
    dispatch(setAnonymousDonor(!isAnonymous)); // Dispatch the setAnonymousDonor action
  };

  return (
    <div className="anonymous-donor">
      <label>
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={handleCheckboxChange}
        />
        I want to be an anonymous donor
      </label>
    </div>
  );
};

export default AnonymousDonor;
