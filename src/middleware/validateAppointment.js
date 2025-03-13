function isDateISO(dateString) {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;
    return isoDateRegex.test(dateString);
}
  
function validateAppointment(req, res, next) {
    const { title, date } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.error('Title is required', 400);
    }

    if (!date || !isDateISO(date)) {
        return res.error('A valid ISO 8601 date is required. Example: "2023-03-12T14:00:00Z"', 400);
    }

    const appointmentDate = new Date(date);
    const now = new Date();
    if (appointmentDate < now) {
      return res.error('Date cannot be in the past', 400);
    }

    next();
}

module.exports = validateAppointment;