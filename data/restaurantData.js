// restaurantData.js
const restaurants = [
  {
    id: 1,
    name: "Nômade",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    rating: 4.8,
    ratingText: "Exceptional",
    reviewCount: 534,
    priceRange: "$$$",
    cuisineType: "Contemporary Mexican",
    bookingCount: 61,
    reviewText:
      "The ambiance on the patio was fantastic. Cocktails and food were sublime and the service from Briteni was great. Would recommend.",
    availableTimeslots: [
      { time: "6:30 PM", available: true },
      { time: "6:45 PM", available: true },
      { time: "7:00 PM", available: false },
      { time: "7:15 PM", available: true },
      { time: "7:30 PM", available: true },
    ],
  },
  {
    id: 2,
    name: "Ember Kitchen",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.9,
    ratingText: "Exceptional",
    reviewCount: 320,
    priceRange: "$$$$",
    cuisineType: "Contemporary Latin • Downtown",
    bookingCount: 49,
    reviewText:
      "Exquisite flavors and impeccable service. Every dish was a delightful surprise of textures and tastes. The wine pairing was perfect.",
    availableTimeslots: [
      { time: "6:00 PM", available: true },
      { time: "6:15 PM", available: true },
      { time: "6:30 PM", available: false },
      { time: "7:00 PM", available: false },
      { time: "7:45 PM", available: true },
    ],
  },
  {
    id: 3,
    name: "Sakura Sushi",
    image:
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VzaGl8ZW58MHx8MHx8&w=1000&q=80",
    rating: 4.7,
    ratingText: "Exceptional",
    reviewCount: 412,
    priceRange: "$$",
    cuisineType: "Japanese • Sushi • Midtown",
    bookingCount: 37,
    reviewText:
      "Fresh fish, creative rolls, and attentive service. The omakase experience is worth every penny. Will definitely be back!",
    availableTimeslots: [
      { time: "5:30 PM", available: true },
      { time: "6:00 PM", available: true },
      { time: "6:30 PM", available: true },
      { time: "7:00 PM", available: false },
      { time: "8:30 PM", available: true },
    ],
  },
  {
    id: 4,
    name: "Olive & Vine",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    rating: 4.5,
    ratingText: "Excellent",
    reviewCount: 287,
    priceRange: "$$",
    cuisineType: "Mediterranean • Italian • Uptown",
    bookingCount: 28,
    reviewText:
      "Delicious pasta and authentic flavors. The outdoor seating area is lovely and the wine selection is impressive. Great date spot.",
    availableTimeslots: [
      { time: "5:45 PM", available: true },
      { time: "6:15 PM", available: true },
      { time: "7:30 PM", available: true },
      { time: "8:00 PM", available: true },
      { time: "8:30 PM", available: false },
    ],
  },
  {
    id: 5,
    name: "The Burnt Edge",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.6,
    ratingText: "Excellent",
    reviewCount: 356,
    priceRange: "$$$",
    cuisineType: "American • Steakhouse • Downtown",
    bookingCount: 45,
    reviewText:
      "Perfectly cooked steaks and excellent cocktails. The atmosphere is upscale but comfortable. The service was outstanding.",
    availableTimeslots: [
      { time: "6:00 PM", available: false },
      { time: "6:45 PM", available: true },
      { time: "7:15 PM", available: true },
      { time: "8:00 PM", available: true },
      { time: "8:45 PM", available: true },
    ],
  },
];

export default restaurants;
