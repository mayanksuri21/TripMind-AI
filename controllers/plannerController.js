const asyncHandler = require('../middleware/asyncHandler');
const travelPlannerService = require('../services/travelPlannerService');

const PlannerController = {
  /**
   * Render planner form
   */
  index: (req, res) => {
    res.render('planner');
  },

  /**
   * Handle planner form submission and generate trip
   */
  generate: asyncHandler(async (req, res) => {
    console.log('[PlannerController] Received planner form submission');
    const itinerary = await travelPlannerService.generateItinerary(req.body);
    res.json({
      success: true,
      itinerary
    });
  })
};

module.exports = PlannerController;
