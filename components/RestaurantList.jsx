import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header with count */}
      <div className="py-5 px-6 text-center border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">{restaurants.length} restaurants</h2>
        <p className="text-gray-600">Page 1 of {Math.ceil(restaurants.length / 5)}</p>
      </div>

      {/* Restaurant cards */}
      <div className="divide-y divide-gray-200 px-6">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;