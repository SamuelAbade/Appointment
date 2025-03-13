# Appointment
API REST con un CRUD para citas. He creado esto para una demostración técnica para AON. Resolví hacerlo en Express.js por la facilidad de crear APIs en cuestión de horas. Está hecho para demostrar mis conocimientos con conceptos de APIs y Orientación a Objetos (Models, Controllers, Services, Middlewares, Routes, Validators y DTOs)

## Rutas Disponibles
Todas las rutas están montadas bajo el prefijo /api. Por ejemplo, /api/appointments.

**GET /appointments**

Obtiene todas las citas.

```json
{
  "status": "success",
  "message": "Appointments retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Primera Prueba",
      "date": "2025-03-15T14:00:00Z",
      "description": "Probando API"
    }
  ]
}
```

Respuesta cuando no hay citas:

```json
{
  "status": "success",
  "message": "No appointments found",
  "data": []
}
```

**POST /appointments**

Crea citas y guarda en localStorage.

Tienes que enviar un Body JSON:
```json
{
      "title": "Primera Prueba",
      "date": "2025-03-15T14:00:00Z",
      "description": "Probando API"
 }
 ```

> NOTA: Title no puede estar vacío y date tiene que ser una fecha que no esté en el pasado, aparte de estar al patrón ISO 8601

Respuesta:
```json
{
	"status":  "success",
	"message":  "Appointment created successfully",
	"data":  {
		"id":  1,
		"title":  "Primera Prueba",
		"date":  "2025-03-15T14:00:00Z",
		"description":  "Probando API"
	}
}
 ```

**PUT /appointments/:id**

Actualiza una cita.

Tienes que enviar un Body JSON:
```json
{
      "title": "Cambiando Prueba",
      "date": "2025-03-15T14:00:00Z",
      "description": "Cambiando API"
 }
 ```
 > NOTA: Aqui también actua el validator.

Respuesta:
```json
{
	"status":  "success",
	"message":  "Appointment updated successfully",
	"data":  {
		"id":  1,
		"title":  "Cambiando Prueba",
		"date":  "2025-03-15T14:00:00Z",
		"description":  "Cambiando API"
	}
}
 ```

Respuesta cuando no encuentra la cita:
```json
{
  "status": "error",
  "message": "Appointment not found",
  "error": {
    "code": 404
  }
}
 ```
 
**DELETE /appointments/:id**

Elimina una cita

Respuesta:
```json
{
	"status":  "success",
	"message":  "Appointment deleted successfully",
	"data":  {
		"id":  1,
		"title":  "Cambiando Prueba",
		"date":  "2025-03-15T14:00:00Z",
		"description":  "Cambiando API"
	}
}
 ```
