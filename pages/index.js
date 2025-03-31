import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ReservationForm from "../components/ReservationForm";
import RestaurantList from "../components/RestaurantList";
import restaurants from "../data/restaurantData";
import Footer from "../components/Footer";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [searchQuery, setSearchQuery] = useState("");

  // Format the date to YYYY-MM-DD format for comparison
  const formatDateForComparison = (date) => {
    if (!date) return "";

    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // Handle complete form submission
  const handleSearch = (formValues) => {
    // Store all form values
    setSearchParams(formValues);
    setShowResults(true);

    console.log("Search params:", formValues);

    // Apply all filters (text, date, time)
    applyAllFilters(formValues);
  };

  // Apply all filters (text, date, and time)
  const applyAllFilters = (formValues) => {
    if (!formValues) return;

    const { date, time, searchQuery } = formValues;
    const formattedDate = formatDateForComparison(date);

    // First, filter by search query
    let filtered = restaurants;

    if (searchQuery && searchQuery.trim() !== "") {
      const lowercaseQuery = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(lowercaseQuery) ||
          (restaurant.cuisineType &&
            restaurant.cuisineType.toLowerCase().includes(lowercaseQuery)) ||
          (restaurant.location &&
            restaurant.location.toLowerCase().includes(lowercaseQuery))
      );
    }

    // Then, filter by date and time availability
    if (formattedDate && time) {
      filtered = filtered.filter((restaurant) => {
        // Find the specific date in the restaurant's availability
        const dateAvailability = restaurant.availability.find(
          (avail) => avail.date === formattedDate
        );

        // If the date exists, check if the time slot is available
        if (dateAvailability) {
          const timeSlot = dateAvailability.timeslots.find(
            (slot) => slot.time === time
          );

          return timeSlot && timeSlot.available;
        }

        return false;
      });
    }

    setFilteredRestaurants(filtered);
  };

  // Handle real-time search input changes
  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };

  // Filter restaurants when search query changes (real-time text search only)
  useEffect(() => {
    // If we have search parameters, use the full filter set
    if (searchParams) {
      applyAllFilters({ ...searchParams, searchQuery });
    } else {
      // Otherwise just filter by text
      if (searchQuery.trim() === "") {
        setFilteredRestaurants(restaurants);
      } else {
        const lowercaseQuery = searchQuery.toLowerCase().trim();
        const filtered = restaurants.filter(
          (restaurant) =>
            restaurant.name.toLowerCase().includes(lowercaseQuery) ||
            (restaurant.cuisineType &&
              restaurant.cuisineType.toLowerCase().includes(lowercaseQuery)) ||
            (restaurant.location &&
              restaurant.location.toLowerCase().includes(lowercaseQuery))
        );
        setFilteredRestaurants(filtered);
      }
    }
  }, [searchQuery]);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-sans">
      <Head>
        <title>Restaurant Reservations | Caspimasa</title>
        <meta
          name="description"
          content="Book your table with our OpenTable clone"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Add Google Fonts for better typography */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <Image src="/caspi.svg" alt="Caspimasa Logo" width={30} height={30} />
                </div>
                <span className="ml-2 text-xl font-bold hidden md:inline text-white">Caspimasa</span>
              </Link>
            </div>
            
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Mobile
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                For Businesses
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                FAQs
              </Link>
              <div className="relative">
                <button className="flex items-center text-gray-300 hover:text-white text-sm">
                  EN
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <button className="ml-4 px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm">
                Sign in
              </button>
            </nav>
            
            {/* Mobile search icon */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-300 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <button className="text-gray-300 p-2 ml-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Banner with video background */}
        <section className="relative w-full h-[500px] mb-8">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          
          {/* Content on top of video */}
          <div className="relative h-full max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6 font-poppins">Book for dinner tonight</h1>
              
              {/* Search Form */}
              <div className="flex justify-center">
                <ReservationForm
                  initialValues={searchParams}
                  onSubmit={handleSearch}
                  onSearchInputChange={handleSearchInputChange}
                  searchQuery={searchQuery}
                />
              </div>
              
              {/* Location detection */}
              <div className="mt-2 text-sm">
                <p className="text-white">
                  It looks like you&apos;re in Austin. Not correct?
                  <button className="ml-2 text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    Get current location
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile search form */}
        <section className="md:hidden px-4 py-2">
          <ReservationForm
            initialValues={searchParams}
            onSubmit={handleSearch}
            onSearchInputChange={handleSearchInputChange}
            searchQuery={searchQuery}
          />
          <div className="mt-2 text-sm">
            <p className="text-gray-300">
              It looks like you&apos;re in Austin. Not correct?
              <button className="ml-2 text-blue-400 font-medium inline-flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                Get current location
              </button>
            </p>
          </div>
        </section>
        
        {/* Active Filters Section (when filters are applied) */}
        {showResults && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-white">
                  {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'restaurant' : 'restaurants'} available
                </h2>
                <div className="flex flex-wrap mt-2">
                  {searchParams?.date && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 mr-2 mb-2">
                      {new Date(searchParams.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      <button 
                        onClick={() => {
                          const newParams = {...searchParams, date: null};
                          setSearchParams(newParams);
                          applyAllFilters(newParams);
                        }}
                        className="ml-1.5 text-gray-400 hover:text-white"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </span>
                  )}
                  {searchParams?.time && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 mr-2 mb-2">
                      {searchParams.time}
                      <button 
                        onClick={() => {
                          const newParams = {...searchParams, time: null};
                          setSearchParams(newParams);
                          applyAllFilters(newParams);
                        }}
                        className="ml-1.5 text-gray-400 hover:text-white"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </span>
                  )}
                  {searchParams?.partySize && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 mr-2 mb-2">
                      {searchParams.partySize} {searchParams.partySize === 1 ? 'person' : 'people'}
                      <button 
                        onClick={() => {
                          const newParams = {...searchParams, partySize: 2};
                          setSearchParams(newParams);
                          applyAllFilters(newParams);
                        }}
                        className="ml-1.5 text-gray-400 hover:text-white"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 mr-2 mb-2">
                      &quot;{searchQuery}&quot;
                      <button 
                        onClick={() => {
                          setSearchQuery("");
                        }}
                        className="ml-1.5 text-gray-400 hover:text-white"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </span>
                  )}
                  {(searchParams || searchQuery) && (
                    <button
                      onClick={() => {
                        setSearchParams(null);
                        setSearchQuery("");
                        setFilteredRestaurants(restaurants);
                        setShowResults(false);
                      }}
                      className="text-sm text-blue-400 hover:text-blue-300 font-medium mt-1"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Restaurant Listings */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {showResults ? 'Available Restaurants' : 'Available for lunch now'}
            </h2>
            {!showResults && (
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                View all
              </Link>
            )}
          </div>
          
          {/* Pass filtered restaurants instead of all restaurants */}
          <RestaurantList restaurants={filteredRestaurants} />
          
          {/* Show "No results" message when there are no matches */}
          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12 bg-gray-800 rounded-lg">
              <svg className="w-12 h-12 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mt-4 text-lg font-medium text-white">No restaurants found</h3>
              <p className="mt-1 text-gray-400">Try adjusting your search criteria to find what you&apos;re looking for.</p>
            </div>
          )}
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}