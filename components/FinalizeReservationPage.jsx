import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import restaurants from '../data/restaurantData';

const FinalizeReservationPage = () => {
  const router = useRouter();
  const { id, date, time, party, seating } = router.query;
  
  // State for the reservation form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  
  // State for the credit card form
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [zipCode, setZipCode] = useState('');
  
  // Checkbox states
  const [saveCard, setSaveCard] = useState(false);
  const [emailOffers, setEmailOffers] = useState(true);
  const [textUpdates, setTextUpdates] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [timerExpired, setTimerExpired] = useState(false);
  
  // Parse restaurantId to number for comparison
  const restaurantId = id ? Number(id) : null;
  
  // Find the restaurant from our data
  const restaurant = restaurants.find(r => r.id === restaurantId);
  
  // Format the seating option for display
  const seatingOption = seating === 'outdoor' 
    ? 'Outdoor (Fully weatherized open air dining)'
    : seating;
  
  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setTimerExpired(true);
      return;
    }
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [timeLeft]);
  
  // Format the timer as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // If restaurant not found or page is still loading
  if (!restaurant) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }
  
  // Format date for display
  const formatDate = () => {
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
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    // In a real app, you would submit this data to your API
    alert('Reservation confirmed! A confirmation email has been sent.');
    router.push('/');
  };
  
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Complete Your Reservation | {restaurant.name}</title>
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
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{restaurant.name}</h1>
        
        {/* Reservation summary */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center mb-2">
            <div className="flex items-center mr-6 mb-2 md:mb-0">
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-medium">{formatDate()}</span>
            </div>
            
            <div className="flex items-center mr-6 mb-2 md:mb-0">
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-medium">{time}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="font-medium">
                {party} {Number(party) === 1 ? 'person' : 'people'} ({seatingOption})
              </span>
            </div>
          </div>
        </div>
        
        {/* Timer and warning */}
        {timeLeft > 0 ? (
          <div className="bg-red-50 border border-red-100 text-gray-700 p-4 rounded-md mb-6">
            <p>We're holding this table for you for {formatTime(timeLeft)} minutes</p>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-100 text-gray-700 p-4 rounded-md mb-6">
            <p>You can still try to complete your reservation, but this table may no longer be available.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">What to know before you go</h2>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Restaurant's terms and conditions</h3>
            <p className="text-gray-600 mb-4">
              If you're running late, you may text to communicate directly with our hosting team using the OpenTable app to let us know, so that we can do our best to hold your table.
            </p>
            <p className="text-gray-600 mb-4">
              Cancelations made less than 2 hours before the reservation and no-shows may be subject to a fee of $10 per guest.
            </p>
            
            <h3 className="font-medium mb-2">Important dining information</h3>
            <p className="text-gray-600 mb-4">
              We have a 10 minute grace period. Please call us if you are running later than 10 minutes after your reservation time.
            </p>
            <p className="text-gray-600 mb-4">
              We may contact you about this reservation, so please ensure your email and phone number are up to date.
            </p>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-4">Diner details</h2>
          
          <div className="mb-6">
            <p className="mb-4">
              <span className="text-red-500 font-medium">Sign in</span> to collect points for this reservation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full border border-gray-300 p-3 rounded-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full border border-gray-300 p-3 rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <div className="relative">
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <div className="bg-white p-3 flex items-center border-r border-gray-300">
                    <span className="flag-icon">🇺🇸</span>
                    <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    className="flex-1 p-3 border-none focus:outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email"

                className="w-full border border-gray-300 p-3 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <div className="relative">
                <select 
                  className="w-full border border-gray-300 p-3 rounded-md appearance-none bg-white"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="">Select an occasion (optional)</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date Night</option>
                  <option value="business">Business Meal</option>
                  <option value="celebration">Celebration</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <textarea 
                placeholder="Add a special request (optional)" 
                className="w-full border border-gray-300 p-3 rounded-md h-24"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              ></textarea>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-4">Credit card required</h2>
          
          <div className="mb-6">
            <p className="mb-4 text-gray-600">
              This restaurant requires a credit card to secure this reservation. All credit card information will be processed securely. No-shows may be subject to a charge of $10 per person.
            </p>
            
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Name on card" 
                className="w-full border border-gray-300 p-3 rounded-md"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="1234 1234 1234 1234" 
                className="w-full border border-gray-300 p-3 rounded-md"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input 
                  type="text" 
                  placeholder="MM / YY" 
                  className="w-full border border-gray-300 p-3 rounded-md"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="CVC" 
                  className="w-full border border-gray-300 p-3 rounded-md"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Zip Code" 
                className="w-full border border-gray-300 p-3 rounded-md"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="saveCard" 
                  className="mt-1 mr-2"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                />
                <label htmlFor="saveCard" className="text-gray-700">
                  Add this card to your account to save time when making future bookings and purchases.
                </label>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="emailOffers" 
                  className="mt-1 mr-2"
                  checked={emailOffers}
                  onChange={(e) => setEmailOffers(e.target.checked)}
                />
                <label htmlFor="emailOffers" className="text-gray-700">
                  Sign me up to receive dining offers and news from this restaurant by email.
                </label>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="textUpdates" 
                  className="mt-1 mr-2"
                  checked={textUpdates}
                  onChange={(e) => setTextUpdates(e.target.checked)}
                />
                <label htmlFor="textUpdates" className="text-gray-700">
                  Yes, I want to get text updates and reminders about my reservations.
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Required:</h3>
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="agreeTerms" 
                  className="mt-1 mr-2"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <label htmlFor="agreeTerms" className="text-gray-700">
                  I agree to the restaurant's terms and conditions
                </label>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-500 text-white font-medium py-3 px-4 rounded focus:outline-none hover:bg-red-600 transition"
            >
              Complete reservation
            </button>
            
            <p className="mt-4 text-gray-700 text-sm">
              By clicking "Complete reservation" you agree to the 
              <a href="#" className="text-red-500 mx-1">OpenTable Terms of Use</a> 
              and 
              <a href="#" className="text-red-500 mx-1">Privacy Policy</a>. 
              Message & data rates may apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinalizeReservationPage;