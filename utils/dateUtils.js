// utils/dateUtils.js

/**
 * Format a date string to display format (e.g. "Fri, Mar 28")
 * @param {string} dateString - ISO date string or date object
 * @returns {string} Formatted date string
 */
export const formatDateDisplay = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString || "Invalid date";
  }
};

/**
 * Format a date object to ISO date string (YYYY-MM-DD)
 * @param {Date} date - JavaScript Date object
 * @returns {string} ISO date string
 */
export const formatDateForApi = (date) => {
  try {
    return date.toISOString().split("T")[0];
  } catch (error) {
    console.error("Error formatting date for API:", error);
    return "";
  }
};

/**
 * Get current date formatted as YYYY-MM-DD
 * @returns {string} Today's date as YYYY-MM-DD
 */
export const getTodayFormatted = () => {
  return formatDateForApi(new Date());
};
