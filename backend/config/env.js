const dotenv = require("dotenv");
dotenv.config();

const { PORT, MONGO_URI, JWT_SRCRET } = process.env;

module.exports = {
  PORT,
  MONGO_URI,
  JWT_SECRET,
};
