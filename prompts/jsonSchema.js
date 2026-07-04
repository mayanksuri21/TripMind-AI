/**
 * JSON Schema for TripMind AI itinerary responses
 */
const itinerarySchema = {
  tripSummary: {
    destination: "string",
    startDate: "string",
    endDate: "string",
    duration: "number",
    travelers: "string",
    budgetTier: "string",
    travelStyle: "string",
    overallDescription: "string"
  },
  destinationOverview: {
    description: "string",
    bestTimeToVisit: "string",
    localCustoms: "string"
  },
  weatherGuide: {
    typicalWeather: "string",
    temperatureRange: "string",
    precipitation: "string",
    advice: "string"
  },
  dailyPlan: [
    {
      day: "number",
      date: "string",
      morning: {
        activity: "string",
        location: "string",
        duration: "string",
        description: "string"
      },
      afternoon: {
        activity: "string",
        location: "string",
        duration: "string",
        description: "string"
      },
      evening: {
        activity: "string",
        location: "string",
        duration: "string",
        description: "string"
      }
    }
  ],
  budgetBreakdown: {
    totalEstimate: "string",
    currency: "string",
    accommodation: "string",
    food: "string",
    transportation: "string",
    activities: "string",
    miscellaneous: "string"
  },
  accommodationSuggestions: [
    {
      name: "string",
      type: "string",
      location: "string",
      priceRange: "string",
      description: "string"
    }
  ],
  transportationPlan: {
    arrival: "string",
    gettingAround: "string",
    departure: "string"
  },
  foodRecommendations: {
    mustTry: ["string"],
    restaurants: [
      {
        name: "string",
        cuisine: "string",
        priceRange: "string",
        location: "string",
        description: "string"
      }
    ]
  },
  packingChecklist: {
    clothing: ["string"],
    toiletries: ["string"],
    electronics: ["string"],
    documents: ["string"],
    miscellaneous: ["string"]
  },
  clothingRecommendations: {
    daywear: "string",
    eveningwear: "string",
    footwear: "string"
  },
  photoSpots: [
    {
      name: "string",
      location: "string",
      bestTime: "string",
      description: "string"
    }
  ],
  hiddenGems: [
    {
      name: "string",
      location: "string",
      description: "string"
    }
  ],
  travelTips: ["string"],
  safetyTips: ["string"],
  emergencyInformation: {
    police: "string",
    ambulance: "string",
    fire: "string",
    embassy: "string",
    localEmergencyContacts: ["string"]
  }
};

module.exports = itinerarySchema;
