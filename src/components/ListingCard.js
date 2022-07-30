import React from "react";

function ListingCard({id, description, image, location, onHandleDelete}) {
  function handleClick () {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(()=> onHandleDelete(id))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
