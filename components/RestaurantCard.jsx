import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const RestaurantCard = ({ restaurant, index, isCompact = false, isMobile = false }) => {
  const router = useRouter();

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="text-yellow-400">
          ★
        </span>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="text-yellow-400">
          ★
        </span>
      );
    }

    // Add empty stars to make 5 total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }

    return stars;
  };

  // Calculate available timeslots count
  const availableTimeslots = restaurant.availableTimeslots.filter(
    (slot) => slot.available
  );

  // Mobile card (stacked full-width view)
  if (isMobile) {
    return (
      <div className="border-b border-gray-200 pb-4">
        <div className="flex flex-col">
          {/* Restaurant image */}
          <div 
            className="w-full h-48 cursor-pointer mb-3"
            onClick={() => router.push(`/restaurant/${restaurant.id}`)}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Restaurant details */}
          <div>
            {/* Restaurant name & rating */}
            <div className="flex justify-between items-start">
              <h3
                className="text-lg font-medium text-blue-600 mb-1 cursor-pointer"
                onClick={() => router.push(`/restaurant/${restaurant.id}`)}
              >
                {index + 1}. {restaurant.name}
              </h3>
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-sm">{renderStars(restaurant.rating)}</span>
                <span className="text-gray-500">({restaurant.reviewCount})</span>
              </div>
            </div>

            {/* Price and cuisine */}
            <div className="mb-2 text-sm text-gray-600">
              <span>{restaurant.priceRange}</span>
              <span className="mx-1">•</span>
              <span>{restaurant.cuisineType}</span>
              {restaurant.neighborhood && (
                <>
                  <span className="mx-1">•</span>
                  <span>{restaurant.neighborhood}</span>
                </>
              )}
            </div>

            {/* Booking information */}
            <div className="flex items-center text-xs mb-2 text-gray-600">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
              <span>
                Booked {restaurant.bookingCount} times today
              </span>
            </div>

            {/* Available time slots */}
            <div className="flex flex-wrap gap-1">
              {availableTimeslots.slice(0, 3).map((slot, i) => (
                <button
                  key={i}
                  className="bg-red-500 text-white text-sm px-2 py-1 rounded-md"
                  onClick={() => router.push({
                    pathname: `/reservation/${restaurant.id}`,
                    query: {
                      date: '2025-03-26',
                      time: slot.time,
                      party: 2
                    }
                  })}
                >
                  {slot.time}
                </button>
              ))}
              {availableTimeslots.length > 3 && (
                <button className="bg-red-500 text-white text-sm px-2 py-1 rounded-md">
                  +{availableTimeslots.length - 3}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isCompact) {
    // Compact card view for horizontal scrolling on desktop
    return (
      <div className="bg-white rounded-lg h-full shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Restaurant image */}
        <div 
          className="w-full h-40 cursor-pointer overflow-hidden"
          onClick={() => router.push(`/restaurant/${restaurant.id}`)}
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover rounded-t-lg hover:opacity-90 transition"
          />
        </div>

        {/* Restaurant details */}
        <div className="p-3">
          {/* Restaurant name */}
          <h3
            className="text-lg font-medium text-gray-900 mb-1 cursor-pointer hover:text-red-500 truncate"
            onClick={() => router.push(`/restaurant/${restaurant.id}`)}
          >
            {restaurant.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-1">
            <div className="text-sm mr-2">{renderStars(restaurant.rating)}</div>
            <span className="text-sm text-gray-500">
              {restaurant.reviewCount} reviews
            </span>
          </div>

          {/* Price and cuisine */}
          <div className="mb-2 text-sm text-gray-700">
            <span>{restaurant.cuisineType}</span>
            <span className="mx-2">•</span>
            <span>{restaurant.priceRange}</span>
            {restaurant.neighborhood && (
              <>
                <span className="mx-2">•</span>
                <span>{restaurant.neighborhood}</span>
              </>
            )}
          </div>

          {/* Booking information */}
          <div className="flex items-center text-xs mb-2 text-gray-700">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            <span>
              Booked {restaurant.bookingCount} times today
            </span>
          </div>

          {/* Available time slots */}
          <div className="flex flex-wrap gap-1">
            {availableTimeslots.slice(0, 2).map((slot, i) => (
              <button
                key={i}
                className="bg-red-500 text-white text-sm px-3 py-1 rounded font-medium hover:bg-red-600 transition"
                onClick={() => router.push({
                  pathname: `/reservation/${restaurant.id}`,
                  query: {
                    date: '2025-03-26',
                    time: slot.time,
                    party: 2
                  }
                })}
              >
                {slot.time}
              </button>
            ))}
            {availableTimeslots.length > 2 && (
              <button className="bg-red-500 text-white text-sm px-2 py-1 rounded font-medium hover:bg-red-600 transition">
                +{availableTimeslots.length - 2}
              </button>
            )}
          </div>

          {/* Points indicator */}
          <div className="flex items-center mt-3 text-xs text-red-500">
            +1,000 pts
          </div>
        </div>
      </div>
    );
  }

  // Regular full-width card view for list page
  return (
    <div className="border-b border-gray-200 pb-6 pt-6 md:border md:rounded-lg md:p-4 md:hover:shadow-md transition-shadow duration-200 bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Restaurant image - desktop: side by side, mobile: stacked */}
        <div 
          className="w-full md:w-40 h-48 md:h-32 mb-4 md:mb-0 md:mr-4 cursor-pointer overflow-hidden"
          onClick={() => router.push(`/restaurant/${restaurant.id}`)}
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover rounded hover:opacity-90 transition"
          />
        </div>

        {/* Restaurant details */}
        <div className="flex-1">
          {/* Restaurant name */}
          <h3
            className="text-xl font-medium text-blue-600 mb-1 cursor-pointer hover:underline"
            onClick={() => router.push(`/restaurant/${restaurant.id}`)}
          >
            {restaurant.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-1">
            <div className="text-xl mr-2">{renderStars(restaurant.rating)}</div>
            <span className="font-medium">{restaurant.ratingText}</span>
            <span className="text-gray-500 ml-2">
              ({restaurant.reviewCount})
            </span>
          </div>

          {/* Price and cuisine */}
          <div className="mb-3 text-gray-700">
            <span className="font-medium">{restaurant.priceRange}</span>
            <span className="mx-2">•</span>
            <span>{restaurant.cuisineType}</span>
            {restaurant.neighborhood && (
              <>
                <span className="mx-2">•</span>
                <span>{restaurant.neighborhood}</span>
              </>
            )}
          </div>

          {/* Booking information */}
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            <span className="font-medium">
              Booked {restaurant.bookingCount} times today
            </span>
          </div>

          {/* Available slots notification */}
          <div className="flex items-center text-red-500 mb-3">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              You're in luck! We still have {availableTimeslots.length}{" "}
              timeslots left
            </span>
          </div>

          {/* Available time slots - mobile: wrap, desktop: flex-row */}
          <div className="flex flex-wrap gap-2">
            {availableTimeslots.slice(0, 4).map((slot, i) => (
              <button
                key={i}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition"
                onClick={() => router.push({
                  pathname: `/reservation/${restaurant.id}`,
                  query: {
                    date: '2025-03-26',
                    time: slot.time,
                    party: 2
                  }
                })}
              >
                {slot.time}{availableTimeslots.length > 4 && i === 3 ? "+" : ""}
              </button>
            ))}
          </div>

          {/* Points indicator for desktop */}
          <div className="hidden md:flex items-center mt-3 text-sm text-gray-500">
            <div className="bg-gray-100 px-2 py-1 rounded">
              +1,000 pts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;