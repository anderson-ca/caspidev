import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import restaurants from "../data/restaurantData";

const RestaurantPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState("overview");
  const [partySize, setPartySize] = useState(2);

  // Find restaurant by ID
  const restaurant = restaurants.find((r) => r.id === Number(id));

  // If restaurant not found or page is still loading
  if (!restaurant) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  // Available time slots for reservation
  const availableSlots = restaurant.availableTimeslots
    .filter((slot) => slot.available)
    .map((slot) => slot.time);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>{restaurant.name} | OpenTable Clone</title>
        <meta
          name="description"
          content={`${restaurant.name} - ${restaurant.cuisineType}`}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="h-5 w-5 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  OpenTable Clone
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Restaurant header */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </div>
            <div className="relative flex items-center">
              <button className="absolute -left-4 text-white bg-black bg-opacity-50 rounded-full p-2">
                See all {restaurant.reviewCount / 5} photos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Restaurant name and basic info */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {restaurant.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < Math.floor(restaurant.rating) ? 'text-red-500' : 'text-gray-300'}`}>★</span>
              ))}
              <span className="ml-2 text-lg font-medium">{restaurant.rating}</span>
            </div>
            <Link href="#reviews" className="text-gray-500 hover:text-gray-700">
              {restaurant.reviewCount} Reviews
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-gray-700 mb-2">
            <div className="font-medium">{restaurant.priceRange}</div>
            <span>•</span>
            <div>{restaurant.cuisineType}</div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>1506 S 1st St, Austin, TX 78704-3043</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Main content */}
          <div className="lg:w-2/3 lg:pr-8">
            {/* Tab navigation */}
            <div className="border-b border-gray-300 mb-6">
              <nav className="-mb-px flex space-x-8">
                {[
                  "overview",
                  "experiences",
                  "private dining",
                  "popular dishes",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      ${
                        activeTab === tab
                          ? 'border-b-2 border-red-500 text-red-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }
                      whitespace-nowrap py-4 px-1 font-medium text-sm md:text-base capitalize
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab content */}
            <div className="mb-8">
              {activeTab === "overview" && (
                <div>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-800">
                        Great for outdoor dining
                      </span>
                      <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-800">
                        Good for special occasions
                      </span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-700 mb-4">
                      {restaurant.reviewText}
                    </p>
                    <button className="text-red-500 font-medium">
                      Read more
                    </button>
                  </div>

                  {/* Dining areas */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Dining areas</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 rounded-full border border-gray-300 text-gray-800">
                        Bar/Cantina (fully weatherized and cozy)
                      </span>
                      <span className="px-4 py-2 rounded-full border border-gray-300 text-gray-800">
                        Outdoor (Fully weatherized open air dining)
                      </span>
                    </div>
                    <button className="text-red-500 font-medium mt-4">
                      View all dining areas
                    </button>
                  </div>

                  {/* Additional information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">
                      Additional information
                    </h3>

                    <div className="mb-4">
                      <div className="flex items-start mb-4">
                        <svg
                          className="w-6 h-6 mr-3 text-gray-700 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-red-500">
                            1506 S 1st St, Austin, TX 78704-3043
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start mb-4">
                        <svg
                          className="w-6 h-6 mr-3 text-gray-700 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          ></path>
                        </svg>
                        <div>
                          <div className="font-medium">Neighborhood</div>
                          <div>Austin</div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 mr-3 text-gray-700 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          ></path>
                        </svg>
                        <div>
                          <div className="font-medium">Cross street</div>
                          <div>Monroe and South 1st St</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab !== "overview" && (
                <div className="py-12 text-center text-gray-500">
                  This section is under construction. Please check back later.
                </div>
              )}
            </div>
          </div>

          {/* Reservation sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Make a reservation</h3>
              
              {/* Party size selector */}
              <div className="mb-4">
                <div className="relative bg-white border border-gray-300 rounded">
                  <div className="flex items-center p-3">
                    <svg
                      className="w-6 h-6 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    <select
                      className="appearance-none bg-transparent border-none w-full focus:outline-none"
                      value={partySize}
                      onChange={(e) => setPartySize(Number(e.target.value))}
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map(
                        (size) => (
                          <option key={size} value={size}>
                            {size} {size === 1 ? "person" : "people"}
                          </option>
                        )
                      )}
                    </select>
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date and time selectors */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative bg-white border border-gray-300 rounded">
                  <div className="flex items-center p-3">
                    <svg
                      className="w-6 h-6 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Mar 26, 2025</span>
                    <svg
                      className="w-5 h-5 text-gray-500 ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                
                <div className="relative bg-white border border-gray-300 rounded">
                  <div className="flex items-center p-3">
                    <svg
                      className="w-6 h-6 text-gray-500 mr-2"
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
                    <span className="text-gray-700">7:00 PM</span>
                    <svg
                      className="w-5 h-5 text-gray-500 ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium text-gray-700 mb-3">Select a time</h4>
              
              {/* Time slot buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {availableSlots.map((time) => (
                  <button 
                    key={time} 
                    className="bg-red-500 text-white py-3 rounded font-medium hover:bg-red-600 transition"
                  >
                    {time}*
                  </button>
                ))}
                {availableSlots.length === 0 && (
                  <div className="col-span-2 text-center py-4 text-gray-500">
                    No time slots available for this date
                  </div>
                )}
              </div>
              
              {/* "Notify me" button */}
              <button className="w-full border border-red-500 text-red-500 py-3 rounded font-medium mb-6 hover:bg-red-50 transition flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                Notify me
              </button>
              
              {/* Booking info */}
              <div className="flex items-center text-gray-700 mb-3">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                <span>Booked {restaurant.bookingCount} times today</span>
              </div>
              
              <div className="flex items-center text-red-500 mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>You're in luck! We still have {availableSlots.length} timeslots left</span>
              </div>
              
              <div className="text-gray-700 mb-2">
                Experiences are available. 
                <button className="ml-1 text-red-500 font-medium">See details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;