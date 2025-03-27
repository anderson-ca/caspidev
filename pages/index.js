import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ReservationForm from "../components/ReservationForm";
import RestaurantList from "../components/RestaurantList";
import restaurants from "../data/restaurantData";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  
  const handleSearch = (formValues) => {
    // In a real app, you would use these values to filter restaurants
    setSearchParams(formValues);
    setShowResults(true);
    
    console.log("Search params:", formValues);
  };
  
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Restaurant Reservations | Caspimasa</title>
        <meta
          name="description"
          content="Book your table with our OpenTable clone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="h-5 w-5 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-xl font-bold hidden md:inline text-black">Caspimasa</span>
                {/* <span className="ml-1 text-xs text-gray-500 hidden md:inline">Clone</span> */}
              </Link>
            </div>
            
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Mobile
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                For Businesses
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                FAQs
              </Link>
              <div className="relative">
                <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
                  EN
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <button className="ml-4 px-4 py-2 border border-transparent rounded-md bg-teal-600 text-white hover:bg-teal-700 text-sm">
                Sign in
              </button>
            </nav>
            
            {/* Mobile search icon */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <button className="text-gray-600 p-2 ml-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Banner for desktop */}
        <section className="relative w-full bg-gray-100 mb-8 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Book for dinner tonight</h1>
              
              {/* Search Form */}
              <div className="flex justify-center">
                <ReservationForm
                  initialValues={searchParams}
                  onSubmit={handleSearch}
                />
              </div>
              
              {/* Location detection */}
              <div className="mt-2 text-sm">
                <p className="text-gray-600">
                  It looks like you&apos;re in Austin. Not correct?
                  <button className="ml-2 text-red-500 font-medium inline-flex items-center">
                    <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
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
          />
          <div className="mt-2 text-sm">
            <p className="text-gray-600">
              It looks like you&apos;re in Austin. Not correct?
              <button className="ml-2 text-red-500 font-medium inline-flex items-center">
                <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                Get current location
              </button>
            </p>
          </div>
        </section>
        
        {/* Featured Section - Visa Dining Collection */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="md:flex items-center">
              <div className="p-6 md:w-1/2 md:p-8">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="h-4 w-4 bg-white rounded-full"></div>
                  </div>
                  <span className="mx-2">×</span>
                  <span className="text-blue-600 font-bold">VISA</span>
                </div>
                <h2 className="text-2xl font-bold mt-4">Visa Dining Collection</h2>
                <p className="mt-2 text-gray-600">
                  Get exclusive access to primetime reservations and access to
                  special events at some of the country&apos;s hottest restaurants.
                </p>
                <button className="mt-4 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 text-sm">
                  Explore restaurants
                </button>
              </div>
              <div className="md:w-1/2 hidden md:block relative h-64">
                <div className="absolute w-full h-full bg-blue-50 grid grid-cols-3 grid-rows-2 gap-2 p-2" style={{ backgroundImage: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(230, 244, 252, 0.3))" }}>
                  <div className="col-span-2 bg-white rounded overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Dining table" />
                  </div>
                  <div className="row-span-2 bg-white rounded overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Mobile phone" />
                  </div>
                  <div className="col-span-2 bg-white rounded overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Restaurant" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Restaurant Listings */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Available for lunch now</h2>
            <Link href="#" className="text-red-500 hover:text-red-600 text-sm">
              View all
            </Link>
          </div>
          <RestaurantList restaurants={restaurants} />
        </section>
      </main>
    </div>
  );
}