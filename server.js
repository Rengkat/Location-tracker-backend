const express = require("express");
const app = express();
const port = 5000;

const start = () => {
  try {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
