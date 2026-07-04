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
    console.log('[PlannerController] Generating trip for preferences:', req.body);

    // In future milestones, we will call travelPlannerService.planTrip()
    const result = {
      success: true,
      message: 'Planner form submitted successfully (controllers and routes implemented)',
      receivedData: req.body
    };

    res.json(result);
  })
};

module.exports = PlannerController;
