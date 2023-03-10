const model = require("../models/Model");
const { Op } = require("sequelize");
const AnimalController = {};

AnimalController.getAllAnimal = async function (req, res) {
  try {
    const animalData = await model.Animal.findAll();
    if (animalData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful", data: animalData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(505).send({
      message: error.message || "Some error occurred while retrieving user.",
    });
  }
};
AnimalController.getAnimalById = async function (req, res) {
  try {
    const animalData = await model.Animal.findOne({
      where: { id: { [Op.like]: [req.params.id] } },
    });
    if (animalData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful.", data: animalData });
    } else {
      res.status(200).json({ message: "Connection failed.", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
AnimalController.createAnimal = async function (req, res) {
  try {
    const checkData = await model.Animal.findAll({
      where: {
        [Op.or]: {
          nameAnimal: req.body.nameAnimal,
          species: req.body.species,
          typeof: req.body.typeof,
          showDuration: req.body.showDuration,
        },
      },
    });
    if (checkData.length > 0) {
      res.status(500).json({
        message: "Animalname/Species/Showduration has already in use.",
      });
    } else {
      await model.Animal.create({
        nameAnimal: req.body.nameAnimal,
        species: req.body.species,
        typeof: req.body.typeof,
        showDuration: req.body.showDuration,
      }).then((res) => {
        res.status(201).json({
          message: "user successful created",
          data: {
            nameAnimal: req.body.nameAnimal,
            species: req.body.species,
            typeof: req.body.typeof,
            showDuration: req.body.showDuration,
          },
        });
      });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
AnimalController.updateAnimal = async function (req, res) {
  try {
    await model.Animal.findAll({ where: { id: req.body.id } }).then(
      async (result) => {
        if (result.length > 0) {
          await model.Animal.update(
            {
              nameAnimal: req.body.nameAnimal,
              species: req.body.species,
              typeof: req.body.typeof,
              showDuration: req.body.showDuration,
            },
            { where: { id: req.body.id } }
          );
          res.status(200).json({
            message: "Update successful.",
            data: {
              id: req.body.id,
              nameAnimal: req.body.nameAnimal,
              species: req.body.species,
              showDuration: req.body.showDuration,
            },
          });
        } else {
          res.status(500).json({ message: "Update failed" });
        }
      }
    );
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
AnimalController.delelteAnimal = async function (req, res) {
  try {
    await model.Animal.findAll({ where: { id: req.body.id } }).then(
      async (result) => {
        if (result.length > 0) {
          await model.Animal.destroy({ where: { id: req.body.id } });
          res.status(200).json({ message: "Delete user successfully." });
        } else {
          res.status(404).json({ message: "id user not found." });
        }
      }
    );
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = AnimalController;
