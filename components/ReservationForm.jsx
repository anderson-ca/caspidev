import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Time slots available for reservation
const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

// Party size options
const partySizes = Array.from({ length: 20 }, (_, i) => i + 1);

// Form validation schema
const ReservationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  partySize: Yup.number().required("Number of guests is required").min(1),
});

const ReservationForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();

  // Format date for display
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-visible">
      <div
        className="relative bg-cover bg-center py-8 px-6 text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop)",
        }}
      >
        <h2 className="text-2xl font-bold">Book for dinner tonight</h2>
      </div>

      <Formik
        initialValues={{
          date: today,
          time: "7:00 PM",
          partySize: 2,
        }}
        validationSchema={ReservationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted with values:", values);
          // Here you would typically send data to your API
          alert(
            `Reservation details:\nDate: ${formatDate(values.date)}\nTime: ${
              values.time
            }\nGuests: ${values.partySize}`
          );
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="p-4">
            {/* Date Selector */}
            <div className="mb-4 relative">
              <div
                className="flex items-center border border-gray-300 rounded p-3 cursor-pointer"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <svg
                  className="w-6 h-6 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="flex-grow">{formatDate(values.date)}</span>
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {/* Calendar Popup - positioned fixed to prevent cutoff */}
              {showCalendar && (
                <div 
                  className="fixed inset-0 z-50 flex items-center justify-center"
                  onClick={(e) => {
                    // Close the calendar when clicking outside of it
                    if (e.target === e.currentTarget) {
                      setShowCalendar(false);
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30" onClick={() => setShowCalendar(false)}></div>
                  <div className="z-10 bg-white rounded-lg shadow-lg overflow-visible" onClick={(e) => e.stopPropagation()}>
                    <Calendar
                      onChange={(date) => {
                        setFieldValue("date", date);
                        setShowCalendar(false);
                      }}
                      value={values.date}
                      minDate={today}
                      navigationLabel={({ date }) => {
                        return `${date.toLocaleString("default", {
                          month: "long",
                        })} ${date.getFullYear()}`;
                      }}
                      formatShortWeekday={(locale, date) => {
                        return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                          date.getDay()
                        ];
                      }}
                      prevLabel={
                        <span className="flex items-center justify-center">&lt;</span>
                      }
                      nextLabel={
                        <span className="flex items-center justify-center">&gt;</span>
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Time Selector */}
            <div className="mb-4">
              <div className="relative border border-gray-300 rounded">
                <div className="flex items-center p-3">
                  <svg
                    className="w-6 h-6 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <Field
                    as="select"
                    name="time"
                    className="appearance-none bg-transparent border-none w-full focus:outline-none"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Field>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

            {/* Party Size Selector */}
            <div className="mb-4">
              <div className="relative border border-gray-300 rounded">
                <div className="flex items-center p-3">
                  <svg
                    className="w-6 h-6 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <Field
                    as="select"
                    name="partySize"
                    className="appearance-none bg-transparent border-none w-full focus:outline-none"
                  >
                    {partySizes.map((size) => (
                      <option key={size} value={size}>
                        {size} {size === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </Field>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
            >
              Show results
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;