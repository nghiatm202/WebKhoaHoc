const Router = require("express").Router();
const Controller = require("../controllers/page");

Router.get("/", Controller.home);

module.exports = Router;
