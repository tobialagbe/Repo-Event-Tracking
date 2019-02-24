const eventsServices = require('./../services/events');
const {validate, processError} = require('./../services/validator');
/**
 * Get all events
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 * @return Response Resource
 */

const getAllEvents = (req, res) => {
  return eventsServices.getAllEvents().then(results => {
    res.status(200).send(results);
  });
};

const addEvent = (req, res) => {
  let data = req.body;
  let validationRule = {
    'id': 'Please provide a valid Id',
    'type': 'Please provide a type',
    'actor': 'Please provide actor',
    'repo': 'Please provide a valid repo detail'
  };
  
  let validated = validate(data, validationRule);
  if (validated !== true) {
    return 
  }
};


var getByActor = () => {

};


var eraseEvents = () => {

};

module.exports = {
	getAllEvents: getAllEvents,
	addEvent: addEvent,
	getByActor: getByActor,
	eraseEvents: eraseEvents
};

















