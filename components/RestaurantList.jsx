import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  // Items per page
  const itemsPerPage = 3;

  // State for pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Calculate page count and current items
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(restaurants.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(restaurants.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, restaurants]);

  // Handle page click
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % restaurants.length;
    setItemOffset(newOffset);

    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header with count */}
      <div className="py-5 px-6 text-center border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">
          {restaurants.length} restaurants
        </h2>
        <p className="text-gray-600">
          Page {Math.floor(itemOffset / itemsPerPage) + 1} of {pageCount}
        </p>
      </div>

      {/* Restaurant cards */}
      <div className="divide-y divide-gray-200 px-6">
        {currentItems.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            index={itemOffset + index}
          />
        ))}
      </div>

      {/* Pagination controls */}
      {pageCount > 1 && (
        <div className="py-5 px-6 border-t border-gray-200">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next ›"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="‹ Previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center items-center space-x-1"
            pageClassName="inline-block"
            pageLinkClassName="py-2 px-3 border border-gray-300 bg-white text-gray-700 rounded hover:bg-gray-100"
            previousClassName="inline-block mr-2"
            previousLinkClassName="py-2 px-3 border border-gray-300 bg-white text-gray-700 rounded hover:bg-gray-100"
            nextClassName="inline-block ml-2"
            nextLinkClassName="py-2 px-3 border border-gray-300 bg-white text-gray-700 rounded hover:bg-gray-100"
            breakClassName="inline-block"
            breakLinkClassName="py-2 px-3 text-gray-700"
            activeClassName="inline-block"
            activeLinkClassName="py-2 px-3 border border-red-500 bg-red-500 text-white rounded"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
