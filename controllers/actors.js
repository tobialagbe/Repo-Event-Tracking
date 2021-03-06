const actorsServices = require('./../services/actors');
const {processError} = require('./../services/validator');

/**
 * Route to get all actors
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 * @return null
 */
const getAllActors = (req, res) => {
  actorsServices.getAllActors().then(actors => {
    res.status(200).send(actors);
  }).catch(error => res.status(400).send(processError(error)));
};

/**
 * Route to update the actor
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 * @return null
 */
const updateActor = async (req, res) => {
  let actor = req.body;

  try {
    let retrievedActor = await actorsServices.getActor(actor.id);

    if (!retrievedActor) {
      return res.status(404).send(processError('Actor not found'));
    }

    if (actor.login !== retrievedActor.login) {
      return res.status(400).send(processError('You can only update avatar_url'));
    }

    let updated = await actorsServices.updateActor(actor);
    res.status(200).send(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send(processError(error));
  }
};

/**
 * Get Actor Streak for events
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 * @return null
 */
const getStreak = (req, res) => {
  actorsServices.getStreak().then(actors => {
    res.status(200).send(actors);
  }).catch(error => res.status(400).send(processError(error)));
};

module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak
};
