import React, { useState } from 'react';
import { X, Plus } from 'react-feather';

const CardAdd = (props) => {
  const [card, setCard] = useState('');
  const [show, setShow] = useState(false);

  const saveCard = () => {
    if (!card.trim()) return;
    props.getcard(card);
    setCard('');
    setShow(false);
  };

  const closeBtn = () => {
    setCard('');
    setShow(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        {show ? (
          <div className="p-4 rounded-md bg-white shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
            <textarea
              value={card}
              onChange={(e) => setCard(e.target.value)}
              className="p-2 w-full rounded-md border bg-gray-100 border-gray-300 text-black resize-none"
              cols="30"
              rows="2"
              placeholder="Enter Card Title..."
            />
            <div className="flex mt-2">
              <button
                onClick={saveCard}
                className="px-3 py-1 rounded bg-sky-600 text-white mr-2 hover:bg-sky-700 transition"
              >
                Add Card
              </button>
              <button
                onClick={closeBtn}
                className="px-3 py-1 rounded hover:bg-gray-200 text-black transition"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShow(true)}
            className="flex p-2 w-full justify-start rounded items-center mt-1 hover:bg-gray-200 transition text-sm text-gray-700"
          >
            <Plus size={16} className="mr-1" />
            Add a card to 
          </button>
        )}
      </div>
    </div>
  );
};

export default CardAdd;
