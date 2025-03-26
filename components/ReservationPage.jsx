import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import restaurants from '../data/restaurantData';

const ReservationPage = () => {
  const router = useRouter();
  const { id, date, time, party } = router.query;
  
  // Parse restaurantId to number for comparison
  const restaurantId = id ? Number(id) : null;
  
  // Find the restaurant from our data
  const restaurant = restaurants.find(r => r.id === restaurantId);
  
  // If restaurant not found or page is still loading
  if (!restaurant) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }
  
  // Format date for display - would normally use a library like date-fns
  const formatDate = () => {
    // This is simplified - in production use a proper date library
    try {
      if (date) {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
      }
      return 'Selected date';
    } catch (e) {
      return 'Selected date';
    }
  };
  
  // Available seating options
  const seatingOptions = [
    { id: 'standard', name: 'Standard' },
    { id: 'bar', name: 'Bar' },
    { id: 'outdoor', name: 'Outdoor (Fully weatherized open air dining)' },
  ];
  
  // Handle seating selection - redirect to finalization page
  const selectSeating = (optionId) => {
    router.push({
      pathname: `/finalize-reservation/${restaurant.id}`,
      query: {
        date: date || '2025-03-26',
        time: time || '7:15 PM',
        party: party || 2,
        seating: optionId
      }
    });
  };
  
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Complete Reservation | {restaurant.name}</title>
        <meta name="description" content={`Complete your reservation at ${restaurant.name}`} />
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
                <span className="ml-2 text-xl font-bold text-gray-900">OpenTable Clone</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{restaurant.name}</h1>
        
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="font-medium">{formatDate()}</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-medium">{time}</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="font-medium">{party} {Number(party) === 1 ? 'person' : 'people'}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-4">Available seating options</h2>
        
        <div className="space-y-4">
          {seatingOptions.map((option) => (
            <div key={option.id} className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-lg">{option.name}</span>
              <button
                onClick={() => selectSeating(option.id)}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50 transition"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        
        {/* Points promotion - similar to OpenTable */}
        <div className="mt-8 p-4 bg-gray-50 rounded-md">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-red-500 text-white p-2 rounded-full mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Earn 1,000 points for this reservation</p>
              <p className="text-gray-600 text-sm">Get closer to your next reward with extra points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;