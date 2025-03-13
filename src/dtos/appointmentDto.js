class AppointmentDto {
    constructor(appointment) {
      this.id = appointment.id;
      this.title = appointment.title;
      this.date = appointment.date;
      this.description = appointment.description;
    }
}
  
module.exports = AppointmentDto;