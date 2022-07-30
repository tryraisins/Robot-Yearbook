import React from "react";

const Card = ({ name, id, email, phone }) => {
  return (
    <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name}</h2>
        <h4>{email}</h4>
      </div>
    </div>
  );
};

export default Card;
