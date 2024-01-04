const app = require("./app");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://tejeshshrestha:mongo2023@cluster0.v1qfdg4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url);

app.listen(3000, () => {
  console.log("Server listening at 3000");
});
