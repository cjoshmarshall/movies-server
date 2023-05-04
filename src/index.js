const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

const port = 3006;

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Server Connected");
});

app.use("/api/movies", require("./routes/movies"));

app.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});
