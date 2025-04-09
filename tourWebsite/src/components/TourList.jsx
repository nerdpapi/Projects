import React from 'react';

// Component to list tours
const TourList = ({ tours }) => {
  return (
    <div>
      {tours.length === 0 ? (
        <p>No tours found.</p>
      ) : (
        tours.map((tour) => (
          <div key={tour.id} style={{ margin: '1rem 0', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{tour.location}</h2>
            <p>Price: {tour.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TourList;
