/**
 * Returns List of Counties.
 * @route /api/counties
 * @method GET
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const getCounties = (req, res) => {
  return res.status(200).json({ message: 'Get Counties' });
};

/**
 * Returns County By Id.
 * @route /api/counties/:id
 * @method GET
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const getCounty = (req, res) => {
  return res.status(200).json({ message: 'Get Single County' });
};

/**
 * Create A County.
 * @route /api/counties
 * @method POST
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const createCounty = (req, res) => {
  throw new Error('Testing an Error');
  // return res.status(200).json({ message: 'Create County' });
};

/**
 * Update A County.
 * @route /api/counties/:id
 * @method PUT
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const updateCounty = (req, res) => {
  return res.status(200).json({ message: 'Update County' });
};

/**
 * Delete a County.
 * @route /api/counties/:id
 * @method DELETE
 * @param {any} req - The request from the client
 * @param {any} res - The response from the server
 */
const deleteCounty = (req, res) => {
  return res.status(200).json({ message: 'Delete County' });
};

module.exports = {
  getCounties,
  getCounty,
  createCounty,
  updateCounty,
  deleteCounty,
};
