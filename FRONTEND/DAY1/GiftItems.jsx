import React from 'react';
import '../assets/css/GiftItems.css';


function GiftItem({ gift }) {
  return (
    <li>
      <h3>{gift.name}</h3>
      <p>Price: ${gift.price}</p>
      {/* Add more details or actions for each gift */}
    </li>
  );
}

export default GiftItem;
