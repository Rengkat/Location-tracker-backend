const notFound = (req, res) => {
  res.status(404).json({ message: "Sorry, resources not found", success: false });
};
module.exports = notFound;
