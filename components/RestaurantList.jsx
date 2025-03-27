import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  return (
    <>
      {/* Mobile view: stacked cards */}
      <div className="md:hidden space-y-4">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            index={index}
            isMobile={true}
          />
        ))}
      </div>
      
      {/* Desktop view: horizontal scrolling row */}
      <div className="hidden md:block relative">
        <div className="flex space-x-4 overflow-x-auto pb-6 hide-scrollbar">
          {restaurants.map((restaurant, index) => (
            <div key={restaurant.id} className="min-w-[280px] lg:min-w-[240px] flex-shrink-0">
              <RestaurantCard
                restaurant={restaurant}
                index={index}
                isCompact={true}
              />
            </div>
          ))}
        </div>
        
        {/* Right scroll button */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hidden md:block">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default RestaurantList;