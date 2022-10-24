const Mountain = require('../models/Mountain');

/**
 * Return a list of mountains
 * @route /api/mountains
 * @method GET
 * @param {any} req - the request object
 * @param {any} res - the response object
 * @returns list of mountains or 500 error
 */
const getMountains = async (req, res) => {
  try {
    const mountains = await Mountain.find();
    return res.status(200).json(mountains);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Return a single mountain
 * @route /api/mountains/:id
 * @method GET
 * @param {any} req - the request object
 * @param {any} res - the response object
 * @returns single mountains or 500 error
 */
const getSingleMountain = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error('Bad request');
  }

  try {
    const mountain = await Mountain.find({id: id});
    if (!mountain) {
      res.status(404);
      throw new Error('Mountain not found.');
    }

    return res.status(200).json(mountain);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Create a mountain
 * @route /api/mountains
 * @method POSt
 * @param {any} req - the request object
 * @param {any} res - the response object
 * @returns create a mountain or 500 error
 */
const createMountain = async (req, res) => {
  const { name, height } = req.body; // NB: destructure to get name and height only
  const mountData = {
    name,
    height,
  };

  if (!mountData.name) {
    res.status(400);
    throw new Error('Mountain name must be provided.');
  }

  try {
    const newMountain = await Mountain.create(mountData);
    return res.status(200).json(newMountain);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Update mountain
 * @route /api/mountains/:id
 * @method PUT
 * @param {any} req - the request object
 * @param {any} res - the response object
 * @returns updated mountain
 */
const updateMountain = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error('Bad Request.');
  }

  try {
    const mountain = await Mountain.find({ id: id });
    if (!mountain) {
      res.status(404);
      throw new Error('Mountain not found');
    }

    const { name, height } = req.body; // destructure...
    const newValues = {
      $set: {
        name: name,
        height: height,
      },
    };

    const updated = await Mountain.findByIdAndUpdate(id, newValues, {
      new: true,
    });

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

/**
 * Delete a mountain
 * @route /api/mountains/:id
 * @method DELETE
 * @param {any} req - the request object
 * @param {any} res - the response object
 * @returns delete mountain or 500 error
 */
const deleteMountain = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error('Bad Request.');
  }

  try {
    const mountain = await Mountain.findById(id);
    if (!mountain) {
      res.status(404);
      throw new Error('Not found.');
    }

    await Mountain.deleteOne(mountain);

    return res.status(200).json({ id: id });
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred' });
  }
};

module.exports = {
  getMountains,
  getSingleMountain,
  createMountain,
  updateMountain,
  deleteMountain,
};
