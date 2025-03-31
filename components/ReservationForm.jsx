import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ReservationForm = ({ initialValues, onSubmit, onSearchInputChange, searchQuery }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(initialValues?.date || new Date());
  const [time, setTime] = useState(initialValues?.time || "7:00 PM");
  const [partySize, setPartySize] = useState(initialValues?.partySize || 2);
  
  // Time slots available for reservation
  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];
  
  // Format date for display
  const formatDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, partySize, searchQuery });
  };
  
  // Handle real-time search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    // Call the parent's handler to update the search query
    if (onSearchInputChange) {
      onSearchInputChange(query);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-5xl">
      {/* Mobile stacked view */}
      <div className="flex flex-col space-y-2 md:hidden">
        <div className="relative border border-gray-300 rounded-md bg-white">
          <div className="flex items-center p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <div 
              className="flex-1 cursor-pointer text-gray-800 font-medium"
              onClick={() => setShowCalendar(true)}
            >
              {formatDate(date)}
            </div>
            <svg className="w-5 h-5 text-gray-500 flex-shrink-0" onClick={() => setShowCalendar(true)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        <div className="relative border border-gray-300 rounded-md bg-white">
          <div className="flex items-center p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <select
              className="appearance-none bg-transparent border-none w-full focus:outline-none pr-8 text-gray-800 font-medium"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            <svg className="w-5 h-5 text-gray-500 absolute right-3 pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        <div className="relative border border-gray-300 rounded-md bg-white">
          <div className="flex items-center p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <select
              className="appearance-none bg-transparent border-none w-full focus:outline-none pr-8 text-gray-800 font-medium"
              value={partySize}
              onChange={(e) => setPartySize(parseInt(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? "person" : "people"}
                </option>
              ))}
            </select>
            <svg className="w-5 h-5 text-gray-500 absolute right-3 pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        <div className="relative border border-gray-300 rounded-md bg-white">
          <div className="flex items-center p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Location, Restaurant, or Cuisine"
              className="w-full border-none focus:outline-none text-gray-800"
              value={searchQuery || ""}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-600 text-white font-medium py-3 rounded-md transition duration-200 border-2 border-red-500"
        >
          Let's go
        </button>
      </div>
      
      {/* Desktop connected view */}
      <div className="hidden md:flex md:flex-row md:items-stretch md:h-12">
        {/* Date Selector */}
        <div className="md:w-40 h-full">
          <div 
            className="flex items-center h-full justify-between border border-gray-300 rounded-l-md cursor-pointer bg-white px-4"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="whitespace-nowrap text-gray-800 font-medium">{formatDate(date)}</span>
            </div>
            <svg className="w-5 h-5 text-gray-500 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        {/* Time Selector */}
        <div className="md:w-40 h-full">
          <div className="relative border-t border-b border-r border-gray-300 h-full bg-white">
            <div className="flex items-center h-full px-4">
              <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <select
                className="appearance-none bg-transparent border-none w-full focus:outline-none pr-8 text-gray-800 font-medium"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              <svg className="w-5 h-5 text-gray-500 absolute right-3 pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Party Size Selector */}
        <div className="md:w-40 h-full">
          <div className="relative border-t border-b border-r border-gray-300 h-full bg-white">
            <div className="flex items-center h-full px-4">
              <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <select
                className="appearance-none bg-transparent border-none w-full focus:outline-none pr-8 text-gray-800 font-medium"
                value={partySize}
                onChange={(e) => setPartySize(parseInt(e.target.value))}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((size) => (
                  <option key={size} value={size}>
                    {size} {size === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
              <svg className="w-5 h-5 text-gray-500 absolute right-3 pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Search Input */}
        <div className="flex-grow h-full">
          <div className="relative border-t border-b border-r border-gray-300 h-full bg-white">
            <div className="flex items-center h-full px-4">
              <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Location, Restaurant, or Cuisine"
                className="w-full h-full border-none focus:outline-none text-gray-800"
                value={searchQuery || ""}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="md:w-32 h-full">
          <button
            type="submit"
            className="w-full h-full bg-gray-900 hover:bg-gray-600 text-white font-medium px-4 rounded-r-md transition duration-200"
          >
            Let's go
          </button>
        </div>
      </div>
      
      {/* Calendar Popup */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={() => setShowCalendar(false)}></div>
          <div className="relative z-10 bg-white rounded-lg shadow-lg">
            <div className="p-2 flex justify-between items-center border-b">
              <h3 className="text-lg font-medium">Select Date</h3>
              <button 
                onClick={() => setShowCalendar(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <Calendar
              onChange={(newDate) => {
                setDate(newDate);
                setShowCalendar(false);
              }}
              value={date}
              minDate={new Date()}
              className="custom-calendar" // Added for potential custom styling
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default ReservationForm;