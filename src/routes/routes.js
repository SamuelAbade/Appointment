const express = require('express');
const router = express.Router();

const appointmentRoutes = require('./appointmentRoutes');

router.use('/appointments', appointmentRoutes);

module.exports = router;