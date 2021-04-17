import express from "express";
import { port } from "./config/index.js";
import loader from "./loaders/index.js";
import fs from "fs";

const app = express();

function createDir() {
  var dir = "uploads/";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, "0744");
  }
}
createDir();

loader(app);
app.use(express.static("uploads"));
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default app;
