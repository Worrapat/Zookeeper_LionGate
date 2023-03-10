const AnimalModel = require("./animal");
const PerformanceStagesModel = require("./PerformanceStages");
const RoundShowModel = require("./RoundShow");
const UsersModel = require("./Users");

const Model = {
  Animal: AnimalModel,
  Performancestages: PerformanceStagesModel,
  Roundshow: RoundShowModel,
  Users: UsersModel,
};

module.exports = Model;
