const express = require('express');

const app = express();
const PORT = 3000;

const mainRoutes = require('./routes/mainRoutes');
const logger = require('./middleware/logger');

// Register middleware before routes.
app.use(logger);
app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
