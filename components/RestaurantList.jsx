import React, { useRef } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  const scrollContainerRef = useRef(null);

  // Handle scrolling on arrow button clicks
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75; // Scroll 75% of the visible width
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  if (restaurants.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile view: stacked cards */}
      <div className="md:hidden space-y-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
      
      {/* Desktop view: horizontal scrolling row with navigation buttons */}
      <div className="hidden md:block relative">
        {/* Left scroll button */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 hover:bg-opacity-90 shadow-lg rounded-full p-2 z-10 text-white hover:bg-gray-700 transition-all"
          style={{ transform: 'translate(-50%, -50%)' }}
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto pb-6 hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="min-w-[280px] lg:min-w-[300px] flex-shrink-0">
              <RestaurantCard
                restaurant={restaurant}
                isCompact={true}
              />
            </div>
          ))}
        </div>
        
        {/* Right scroll button */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 hover:bg-opacity-90 shadow-lg rounded-full p-2 z-10 text-white hover:bg-gray-700 transition-all"
          style={{ transform: 'translate(50%, -50%)' }}
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
      {/* Custom CSS to hide scrollbars but keep scrolling functionality */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </>
  );
};

export default RestaurantList;