const database = require('./../models/config');

const getAllEvents = () => {
  let sql = 'SELECT * FROM events INNER JOIN rep'
  database.find()
};

module.exports = {
  getAllEvents
};
