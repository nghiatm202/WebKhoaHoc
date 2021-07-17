const express = require("express");
const expresshbs = require("express-handlebars");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const Router = require("./src/routes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "hbs",
  expresshbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

Router(app);

app.listen(port, () => console.log(`Server running on port ${port}`));
