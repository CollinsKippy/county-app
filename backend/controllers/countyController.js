/**
 * Returns List of Counties.
 * @route /api/counties
 * @method GET
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const getCounties = async (req, res) => {
  try {
    return res.status(200).json({ message: 'Get Counties' });
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
  try {
    return res.status(200).json({ message: 'Get Single County' });
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
  if (!req.body.name) {
    res.status(400);
    throw new Error('No county details provided.');
  }

  try {
    return res.status(201).json({ message: 'Created County' });
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
 */
const updateCounty = async (req, res) => {
  try {
    return res.status(200).json({ message: 'Update County' });
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
  try {
    return res.status(200).json({ message: 'Delete County' });
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
