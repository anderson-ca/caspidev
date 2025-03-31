import React from "react";
import Link from "next/link";

const RestaurantCard = ({ restaurant, isCompact = false }) => {
  // Get today's date in YYYY-MM-DD format to find today's timeslots
  const getTodayFormatted = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Find today's availability entry or use the first one if today not found
  const todayFormatted = getTodayFormatted();
  const todayAvailability = restaurant.availability?.find(
    avail => avail.date === todayFormatted
  ) || restaurant.availability?.[0];

  // Extract available timeslots from today's availability
  const availableTimeslots = todayAvailability?.timeslots?.filter(
    slot => slot.available
  ) || [];

  // Count available slots
  const availableCount = availableTimeslots.length;

  const cardClasses = isCompact 
    ? "bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full max-w-[300px]"
    : "bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 max-w-md mx-auto max-w-[300px]";

  return (
    <div className={cardClasses}>
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {/* Favorite button */}
        <button className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-1.5 shadow-sm hover:bg-opacity-100 transition">
          <svg
            className="w-5 h-5 text-gray-700 hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          {/* Make the Link wrap the title text, not the heading element */}
          <Link 
            href={`/restaurant/${restaurant.id}`} 
            className="text-lg font-bold text-white hover:text-blue-400 transition"
          >
            {restaurant.name}
          </Link>
          <div className="flex items-center bg-blue-900 bg-opacity-70 text-blue-200 text-xs font-semibold px-2 py-1 rounded-full">
            <span className="mr-1">{restaurant.rating}</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>

        <p className="text-sm text-gray-300">{restaurant.ratingText}</p>
        <p className="text-sm text-gray-400 mb-3">
          {restaurant.cuisineType}
        </p>

        <div className="flex justify-between mb-3">
          <span className="text-sm text-gray-400">
            {restaurant.reviewCount} reviews
          </span>
          <span className="text-sm font-medium text-gray-300">{restaurant.priceRange}</span>
        </div>

        {/* Time slots - with horizontal scrolling */}
        <div className="mb-4">
          {availableCount > 0 && (
            <div className="relative">
              {/* Horizontal scrollable container */}
              <div className="overflow-x-auto hide-scrollbar relative">
                <div className="flex space-x-2 pb-1 -mx-1 px-1">
                  {availableTimeslots.map((slot, index) => (
                    <Link
                      key={index}
                      href={`/reservation/${restaurant.id}?date=${todayAvailability?.date || ''}&time=${slot.time}&party=2`}
                      className="whitespace-nowrap text-sm px-3 py-1.5 border border-gray-700 bg-gray-700 rounded-md text-white hover:border-blue-500 hover:bg-blue-900 hover:bg-opacity-30 transition-colors flex-shrink-0"
                    >
                      {slot.time}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Gradient shadows for scroll indication */}
              {availableTimeslots.length > 4 && (
                <>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none"></div>
                </>
              )}
            </div>
          )}
          
          {availableCount === 0 && (
            <p className="text-sm text-gray-500 italic">No available times</p>
          )}
        </div>

        {/* Booked X times today - simplified design */}
        {restaurant.bookingCount > 0 && (
          <p className="text-xs text-blue-400 font-medium">
            Booked {restaurant.bookingCount} times today
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;