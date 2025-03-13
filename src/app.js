const express = require('express');
const app = express();

// Routes
const apiRoutes = require('./routes/routes');

// Middlewares
const responseMiddleware = require('./middleware/responseMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(responseMiddleware);

app.use('/api', apiRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});