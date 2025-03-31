import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import restaurants from "../data/restaurantData";
import Footer from "../components/Footer";

const ReservationPage = () => {
  const router = useRouter();
  const { id, date, time, party } = router.query;

  // Parse restaurantId to number for comparison
  const restaurantId = id ? Number(id) : null;

  // Find the restaurant from our data
  const restaurant = restaurants.find((r) => r.id === restaurantId);

  // If restaurant not found or page is still loading
  if (!restaurant) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Format date for display - would normally use a library like date-fns
  const formatDate = () => {
    // This is simplified - in production use a proper date library
    try {
      if (date) {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });
      }
      return "Selected date";
    } catch (e) {
      return "Selected date";
    }
  };

  // Available seating options
  const seatingOptions = [
    { id: "standard", name: "Standard" },
    { id: "bar", name: "Bar" },
    { id: "outdoor", name: "Outdoor (Fully weatherized open air dining)" },
  ];

  // Handle seating selection - redirect to finalization page
  const selectSeating = (optionId) => {
    router.push({
      pathname: `/finalize-reservation/${restaurant.id}`,
      query: {
        date: date || "2025-03-26",
        time: time || "7:15 PM",
        party: party || 2,
        seating: optionId,
      },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>Complete Reservation | {restaurant.name}</title>
        <meta
          name="description"
          content={`Complete your reservation at ${restaurant.name}`}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/caspi.svg"
                    alt="Caspimasa Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-2 text-xl font-bold hidden md:inline text-white">
                  Caspimasa
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="text-white hover:text-blue-200 text-sm">
                Mobile
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 text-sm">
                For Businesses
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 text-sm">
                FAQs
              </Link>
              <div className="relative">
                <button className="flex items-center text-white hover:text-blue-200 text-sm">
                  EN
                  <svg
                    className="w-4 h-4 ml-1"
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
                </button>
              </div>
              <button className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex justify-center">
        <div className="px-4 sm:px-6 lg:px-8 w-full lg:max-w-[900px]">
          {" "}
          <div className="px-4 py-8 flex-grow">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {restaurant.name}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
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
                <span className="font-medium text-gray-800">{formatDate()}</span>
              </div>

              <div className="flex items-center">
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
                <span className="font-medium text-gray-800">{time}</span>
              </div>

              <div className="flex items-center">
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
                <span className="font-medium text-gray-800">
                  {party} {Number(party) === 1 ? "person" : "people"}
                </span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Available seating options
            </h2>

            <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
              {seatingOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex justify-between items-center py-4 border-b border-gray-200"
                >
                  <span className="text-lg text-gray-800">{option.name}</span>
                  <button
                    onClick={() => selectSeating(option.id)}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50 transition"
                  >
                    Select
                  </button>
                </div>
              ))}

              {/* Points promotion with blue accent */}
              <div className="mt-8 p-4 bg-blue-50 rounded-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 text-white p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Earn 1,000 points for this reservation
                    </p>
                    <p className="text-gray-600 text-sm">
                      Get closer to your next reward with extra points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReservationPage;
