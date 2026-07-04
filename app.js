require('dotenv').config();
const express = require('express');
const path = require('path');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const homeRoutes = require('./routes/homeRoutes');
const plannerRoutes = require('./routes/plannerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup EJS engine and views path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeRoutes);
app.use('/planner', plannerRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[Server] TripMind AI running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
});

module.exports = app;
