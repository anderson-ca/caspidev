import React, { useState } from "react";
import Head from "next/head";
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
    <div className="bg-gray-100 w-full h-full m-0 p-0 min-w-screen min-h-screen">
      <Head>
        <title>Restaurant Reservations | OpenTable Clone</title>
        <meta
          name="description"
          content="Book your table with our OpenTable clone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-[100vw] min-h-[100vh] flex flex-col items-center m-0 p-4">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col">
            <div className="">
              <ReservationForm
                initialValues={searchParams}
                onSubmit={handleSearch}
                compact={true}
              />
            </div>
            <RestaurantList restaurants={restaurants} />
          </div>
        </div>
      </main>
    </div>
  );
}
