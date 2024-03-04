const express = require("express");
const cors = require("cors");
const notFound = require("./midlewares/not-found");
const user = require("./routers/UserRoute");
const app = express();
const port = 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("api/location-tracker/user", user);
app.use(notFound);
const start = () => {
  try {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
