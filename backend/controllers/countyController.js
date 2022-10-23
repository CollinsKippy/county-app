const County = require('../models/County');

/**
 * Returns List of Counties.
 * @route /api/counties
 * @method GET
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const getCounties = async (req, res) => {
  try {
    const counties = await County.find();

    return res.status(200).json(counties);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

/**
 * Returns County By Id.
 * @route /api/counties/:id
 * @method GET
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const getCounty = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error('Bad Request');
  }

  try {
    const county = await County.findById(id);
    if (!county) {
      res.status(404);
      throw new Error('County not found.');
    }

    return res.status(200).json(county);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

/**
 * Create A County.
 * @route /api/counties
 * @method POST
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const createCounty = async (req, res) => {
  const countyName = req.body.name;

  if (!countyName) {
    res.status(400);
    throw new Error('No county name provided.');
  }

  try {
    const newCounty = await County.create({ name: countyName });

    return res.status(201).json(newCounty);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

/**
 * Update A County.
 * @route /api/counties/:id
 * @method PUT
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 * @data req.body has the data
 */
const updateCounty = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error(`Bad Request`);
  }

  try {
    const county = await County.findById(id);
    if (!county) {
      res.status(404);
      throw new Error(`County with id ${id} not found`);
    }

    const updatedGoal = await County.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json(updatedGoal);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

/**
 * Delete a County.
 * @route /api/counties/:id
 * @method DELETE
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const deleteCounty = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error(`Bad Request.`);
  }

  try {
    const county = await County.findById(id);
    if (!county) {
      res.status(404);
      throw new Error(`County with ${id} not found.`);
    }

    await County.deleteOne(county);

    return res.status(200).json({ id });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

module.exports = {
  getCounties,
  getCounty,
  createCounty,
  updateCounty,
  deleteCounty,
};
