// server.js

// Libraries:

require('dotenv').config();

// Modules:

const database = require('./database');
const application = require('./application');

// Code:

const URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

database.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  }
);

application.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
