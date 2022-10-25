const Lake = require('../models/Lake');

/**
 * Return list of lakes.
 * @method GET
 * @route /api/lakes
 * @param {any} req the request object
 * @param {any} res the response object
 * @returns list of mountains
 */
const getLakes = async (req, res) => {
  try {
    const lakes = await Lake.find();

    return res.status(200).json(lakes);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Return single lake.
 * @method GET
 * @route /api/lakes/:id
 * @param {any} req the request object
 * @param {any} res the response object
 * @returns single mountain
 */
const getLake = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error('Wrong id provided.');
  }

  try {
    const lake = await Lake.findById(id);
    if (!lake) {
      res.status(404);
      throw new Error('No Lake found.');
    }

    return res.status(200).json(lake);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Create lake.
 * @method POST
 * @route /api/lakes
 * @param {any} req the request object
 * @param {any} res the response object
 * @returns list of mountains or 500 error
 */
const createLake = async (req, res) => {
  const lake = req.body;
  if (!lake) {
    res.status(400);
    throw new Error('No details provided.');
  }

  try {
    const newLake = await Lake.create(lake);

    return res.status(201).json(newLake);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Update lake.
 * @method PUT
 * @route /api/lakes/:id
 * @param {any} req the request object
 * @param {any} res the response object
 * @returns updated mountain
 */
const updateLake = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error('Incorrect ID provided.');
  }

  try {
    const lake = await Lake.findById(id);
    if (!lake) {
      res.status(404);
      throw new Error(`Lake with id ${id} not found.`);
    }

    const updatedLake = await Lake.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json(updatedLake);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Delete lake.
 * @method DELETE
 * @route /api/lakes/:id
 * @param {any} req the request object
 * @param {any} res the response object
 * @returns delete lake
 */
const deleteLake = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error(`Incorrect id provided.`);
  }

  try {
    const lake = await Lake.findById(id);
    if (!lake) {
      res.status(404);
      throw new Error(`Lake with id ${id} not found.`);
    }

    await Lake.deleteOne(id);

    return res.status(200).json({ id: id });
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

module.exports = {
  getLakes,
  getLake,
  createLake,
  updateLake,
  deleteLake,
};
