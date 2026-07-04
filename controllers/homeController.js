const HomeController = {
  /**
   * Render home/landing page
   */
  index: (req, res) => {
    res.render('home');
  }
};

module.exports = HomeController;
