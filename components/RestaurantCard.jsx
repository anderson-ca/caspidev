import React from 'react';

const RestaurantCard = ({ restaurant, index }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="text-yellow-400">★</span>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="text-yellow-400">★</span>
      );
    }

    // Add empty stars to make 5 total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className="text-gray-300">★</span>
      );
    }

    return stars;
  };

  // Calculate available timeslots count
  const availableTimeslots = restaurant.availableTimeslots.filter(slot => slot.available);

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Restaurant image */}
        <div className="md:w-1/4 h-40 md:h-auto mr-0 md:mr-4 mb-4 md:mb-0">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover rounded"
          />
        </div>
        
        {/* Restaurant details */}
        <div className="md:w-3/4">
          <h3 className="text-xl font-medium text-blue-600 mb-1">
            {index + 1}. {restaurant.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-1">
            <div className="text-xl mr-2">
              {renderStars(restaurant.rating)}
            </div>
            <span className="font-medium">{restaurant.ratingText}</span>
            <span className="text-gray-500 ml-2">({restaurant.reviewCount})</span>
          </div>
          
          {/* Price and cuisine */}
          <div className="mb-3 text-gray-700">
            <span className="font-medium">{restaurant.priceRange}</span>
            <span className="mx-2">•</span>
            <span>{restaurant.cuisineType}</span>
          </div>
          
          {/* Booking information */}
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            <span className="font-medium">Booked {restaurant.bookingCount} times today</span>
          </div>
          
          {/* Available slots notification */}
          <div className="flex items-center text-red-500 mb-3">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
            <span>You're in luck! We still have {availableTimeslots.length} timeslots left</span>
          </div>
          
          {/* Available time slots */}
          <div className="flex flex-wrap mb-4 gap-2">
            {restaurant.availableTimeslots.map((slot, i) => (
              slot.available && (
                <button 
                  key={i} 
                  className="bg-red-500 text-white px-4 py-2 rounded font-medium"
                >
                  {slot.time}*
                </button>
              )
            ))}
          </div>
          
          {/* Review text */}
          <p className="text-gray-700">{restaurant.reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;