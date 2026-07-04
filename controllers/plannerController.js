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
    try {
      const itinerary = await travelPlannerService.generateItinerary(req.body);
      res.render('result', { itinerary });
    } catch (error) {
      console.error('[PlannerController] Error generating itinerary:', error);
      res.render('error', {
        message: 'Oops! We had trouble generating your itinerary. Please try again.',
        error: { status: 500, stack: error.message }
      });
    }
  })
};

module.exports = PlannerController;
