const asyncHandler = require('../middleware/asyncHandler');
const travelPlannerService = require('../services/travelPlannerService');
const pdfService = require('../services/pdfService');
// const pdfController = require('./pdfController');

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
      req.session.itinerary = itinerary; // Store in session
      res.render('result', { itinerary });
    } catch (error) {
      console.error('[PlannerController] Error generating itinerary:', error);
      res.render('error', {
        message: 'Oops! We had trouble generating your itinerary. Please try again.',
        error: { status: 500, stack: error.message }
      });
    }
  }),

  /**
   * Download itinerary as PDF
   */
  download: asyncHandler(async (req, res, next) => {
    console.log('[PDFController] Download requested');
    try {
      const itinerary = req.session.itinerary;
      
      if (!itinerary) {
        console.error('[PDFController] No itinerary in session');
        res.render('error', {
          message: 'No itinerary found. Please plan a trip first.',
          error: { status: 404, stack: 'Itinerary not found in session' }
        });
        return;
      }

      const pdfStream = pdfService.createItineraryPDF(itinerary);
      const filename = pdfService.generateFilename(itinerary);
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      
      pdfStream.pipe(res);
      console.log('[PDFController] Download sent.');
    } catch (error) {
      console.error('[PDFController] Error downloading PDF:', error);
      res.render('error', {
        message: 'Oops! We had trouble generating your PDF. Please try again.',
        error: { status: 500, stack: error.message }
      });
    }
  })
};

module.exports = PlannerController;
