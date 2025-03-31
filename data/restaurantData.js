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
    location: "Downtown",
    bookingCount: 61,
    reviewText:
      "The ambiance on the patio was fantastic. Cocktails and food were sublime and the service from Briteni was great. Would recommend.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "6:30 PM", available: true },
          { time: "6:45 PM", available: true },
          { time: "7:00 PM", available: false },
          { time: "7:15 PM", available: true },
          { time: "7:30 PM", available: true },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: false },
          { time: "7:30 PM", available: false },
        ]
      },
      { 
        date: "2025-04-01", 
        timeslots: [
          { time: "6:00 PM", available: false },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
          { time: "8:00 PM", available: true },
        ]
      }
    ]
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
    cuisineType: "Contemporary Latin",
    location: "Downtown",
    bookingCount: 49,
    reviewText:
      "Exquisite flavors and impeccable service. Every dish was a delightful surprise of textures and tastes. The wine pairing was perfect.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "6:00 PM", available: true },
          { time: "6:15 PM", available: true },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: false },
          { time: "7:45 PM", available: true },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "5:00 PM", available: true },
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
        ]
      },
      { 
        date: "2025-04-01", 
        timeslots: [
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: false },
          { time: "7:30 PM", available: false },
          { time: "8:00 PM", available: false },
          { time: "8:30 PM", available: false },
        ]
      }
    ]
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
    cuisineType: "Japanese • Sushi",
    location: "Midtown",
    bookingCount: 37,
    reviewText:
      "Fresh fish, creative rolls, and attentive service. The omakase experience is worth every penny. Will definitely be back!",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: false },
          { time: "8:30 PM", available: true },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "5:30 PM", available: false },
          { time: "6:00 PM", available: false },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
        ]
      },
      { 
        date: "2025-04-01", 
        timeslots: [
          { time: "5:00 PM", available: true },
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
        ]
      },
      { 
        date: "2025-04-02", 
        timeslots: [
          { time: "5:00 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "7:00 PM", available: true },
          { time: "8:00 PM", available: true },
          { time: "9:00 PM", available: true },
        ]
      }
    ]
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
    cuisineType: "Mediterranean • Italian",
    location: "Uptown",
    bookingCount: 28,
    reviewText:
      "Delicious pasta and authentic flavors. The outdoor seating area is lovely and the wine selection is impressive. Great date spot.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "5:45 PM", available: true },
          { time: "6:15 PM", available: true },
          { time: "7:30 PM", available: true },
          { time: "8:00 PM", available: true },
          { time: "8:30 PM", available: false },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
          { time: "8:00 PM", available: true },
        ]
      },
      { 
        date: "2025-04-02", 
        timeslots: [
          { time: "5:30 PM", available: false },
          { time: "6:00 PM", available: false },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: false },
          { time: "7:30 PM", available: false },
        ]
      }
    ]
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
    cuisineType: "American • Steakhouse",
    location: "Downtown",
    bookingCount: 45,
    reviewText:
      "Perfectly cooked steaks and excellent cocktails. The atmosphere is upscale but comfortable. The service was outstanding.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "6:00 PM", available: false },
          { time: "6:45 PM", available: true },
          { time: "7:15 PM", available: true },
          { time: "8:00 PM", available: true },
          { time: "8:45 PM", available: true },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: false },
          { time: "7:30 PM", available: false },
        ]
      },
      { 
        date: "2025-04-01", 
        timeslots: [
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
          { time: "8:00 PM", available: true },
          { time: "8:30 PM", available: true },
          { time: "9:00 PM", available: true },
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Fusion Garden",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.7,
    ratingText: "Exceptional",
    reviewCount: 278,
    priceRange: "$$$",
    cuisineType: "Asian Fusion",
    location: "Eastside",
    bookingCount: 33,
    reviewText:
      "Innovative dishes with a perfect blend of Asian flavors. The tasting menu was a culinary journey worth taking. Beautiful presentation.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "5:00 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "7:00 PM", available: false },
          { time: "8:00 PM", available: false },
          { time: "9:00 PM", available: true },
        ]
      },
      { 
        date: "2025-04-01", 
        timeslots: [
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
        ]
      },
      { 
        date: "2025-04-02", 
        timeslots: [
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: false },
          { time: "7:30 PM", available: false },
          { time: "8:00 PM", available: true },
          { time: "8:30 PM", available: true },
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Coastal Catch",
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VhZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.5,
    ratingText: "Excellent",
    reviewCount: 312,
    priceRange: "$$$$",
    cuisineType: "Seafood",
    location: "Waterfront",
    bookingCount: 39,
    reviewText:
      "Fresh seafood with ocean views. The oyster selection changes daily and the lobster was cooked to perfection. Great wine list too.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: false },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "6:00 PM", available: false },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: false },
          { time: "8:00 PM", available: true },
          { time: "8:30 PM", available: true },
        ]
      },
      { 
        date: "2025-04-02", 
        timeslots: [
          { time: "5:00 PM", available: true },
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Harvest Table",
    image:
      "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybSUyMHRvJTIwdGFibGV8ZW58MHx8MHx8&w=1000&q=80",
    rating: 4.4,
    ratingText: "Very Good",
    reviewCount: 245,
    priceRange: "$$",
    cuisineType: "Farm-to-Table • American",
    location: "North End",
    bookingCount: 25,
    reviewText:
      "Seasonal menu sourced from local farms. The vegetable dishes are the stars here, and the service is warm and knowledgeable.",
    availability: [
      { 
        date: "2025-03-30", 
        timeslots: [
          { time: "5:00 PM", available: true },
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
        ]
      },
      { 
        date: "2025-03-31", 
        timeslots: [
          { time: "5:00 PM", available: false },
          { time: "5:30 PM", available: false },
          { time: "6:00 PM", available: false },
          { time: "6:30 PM", available: false },
          { time: "7:00 PM", available: false },
        ]
      },
      { 
        date: "2025-04-01", 
        timeslots: [
          { time: "5:30 PM", available: true },
          { time: "6:00 PM", available: true },
          { time: "6:30 PM", available: true },
          { time: "7:00 PM", available: true },
          { time: "7:30 PM", available: true },
        ]
      }
    ]
  }
];

export default restaurants;