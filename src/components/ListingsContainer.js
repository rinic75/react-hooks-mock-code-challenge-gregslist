import React, { useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])
  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(listings=>setListings(listings))
  },[])

  function handleDelete(id) {
    const deletedListings = listings.filter(listing=> listing.id !== id)
    setListings(deletedListings)
  }

  const listingCards = listings.map(listing => {
    return (
      <ListingCard 
        key={listing.id}
        id={listing.id}
        description={listing.description} 
        image={listing.image}
        location={listing.location}
        onHandleDelete={handleDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
