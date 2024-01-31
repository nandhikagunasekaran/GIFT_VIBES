import React, { useState } from 'react';
import '../assets/css/GiftList.css';


const initialGifts = [
  { id: 1, name: 'Candle', price: 10 },
  { id: 2, name: 'Book', price: 20 },
  // Add more gift items
];

function GiftList() {
  const [gifts, setGifts] = useState(initialGifts);

  return (
    <div>
      <h2>Featured Gifts</h2>
      <ul>
        {gifts.map(gift => (
          <GiftItem key={gift.id} gift={gift} />
        ))}
      </ul>
    </div>
  );
}

export default GiftList;
