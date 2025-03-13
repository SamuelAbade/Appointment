const Appointment = require('../models/appointment');

class AppointmentService {
  constructor() {
    this.appointments = [];
    this.nextId = 1;
  }

  getAllAppointments() {
    return this.appointments;
  }

  createAppointment(appointment) {
    const newAppointment = new Appointment(this.nextId++, appointment.title, appointment.date, appointment.description);
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  updateAppointment(id, updated) {
    const index = this.appointments.findIndex(app => app.id === Number(id));
    if (index == -1) {
      const error = new Error('Appointment not found');
      error.statusCode = 404;
      throw error;
    }

    const appointment = this.appointments[index];
    appointment.title = updated.title || appointment.title;
    appointment.date = updated.date || appointment.date;
    appointment.description = updated.description || appointment.description;

    return appointment;
  }

  deleteAppointment(id) {
    const index = this.appointments.findIndex(app => app.id === Number(id));
    if (index == -1) {
      const error = new Error('Appointment not found');
      error.statusCode = 404;
      throw error;
    }
    return this.appointments.splice(index, 1)[0];
  }
}

module.exports = AppointmentService;