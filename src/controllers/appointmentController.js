const AppointmentService = require('../services/appointmentService');
const AppointmentDto = require('../dtos/appointmentDto');

class AppointmentController {
  constructor() {
    this.appointmentService = new AppointmentService();
    this.getAllAppointments = this.getAllAppointments.bind(this);
    this.createAppointment = this.createAppointment.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  async getAllAppointments(req, res, next) {
    try {
      const appointments = this.appointmentService.getAllAppointments();
      const appointmentDtos = appointments.map(app => new AppointmentDto(app));
      res.success(appointmentDtos, appointmentDtos.length > 0 ? "Appointments retrieved successfully" : "No appointments found");
    } catch (err) {
      next(err);
    }
  }

  async createAppointment(req, res, next) {
    try {
      const newAppointment = this.appointmentService.createAppointment(req.body);
      const appointmentDto = new AppointmentDto(newAppointment);
      res.success(appointmentDto, "Appointment created successfully", 201);
    } catch (err) {
      next(err);
    }
  }

  async updateAppointment(req, res, next) {
    try {
      const updatedAppointment = this.appointmentService.updateAppointment(req.params.id, req.body);
      const appointmentDto = new AppointmentDto(updatedAppointment);
      res.success(appointmentDto, "Appointment updated successfully");
    } catch (err) {
      next(err);
    }
  }

  async deleteAppointment(req, res, next) {
    try {
      const deletedAppointment = this.appointmentService.deleteAppointment(req.params.id);
      const appointmentDto = new AppointmentDto(deletedAppointment);
      res.success(appointmentDto, "Appointment deleted successfully");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AppointmentController();