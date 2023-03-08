const animalModel = require("./animal");
const performanceStagesModel = require("./performance_stages");
const roundShowModel = require("./round_show");
const usersModel = require("./users");

const model = {
  animal: animalModel,
  performancestages: performanceStagesModel,
  roundshow: roundShowModel,
  users: usersModel,
};

module.exports = model;
