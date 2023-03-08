const model = require("../models/model");
const { Op } = require("sequelize");
const UsersController = {};

UsersController.getAllUsers = async function (req, res) {
  try {
    const userData = await model.users.findAll();
    if (userData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful", data: userData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(505).send({
      message: error.message || "Some error occurred while retrieving user.",
    });
  }
};

UsersController.getUsersById = async function (req, res) {
  try {
    const userData = await model.users.findOne({
      where: { id: { [Op.like]: [req.params.id] } },
    });
    if (userData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful.", data: userData });
    } else {
      res.status(200).json({ message: "Connection failed.", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

UsersController.createUsers = async function (req, res) {
  try {
    const checkData = await model.users.findAll({
      where: {
        [Op.or]: {
          username: req.body.username,
          password: req.body.password,
        },
      },
    });
    if (checkData.length > 0) {
      res
        .status(500)
        .json({ message: "Username/password has already in use." });
    } else {
      await model.users
        .create({
          username: req.body.username,
          password: req.body.password,
          token: req.body.username + req.body.password,
        })
        .then((result) => {
          res.status(201).json({
            message: "user successful created",
            data: {
              username: req.body.username,
              password: req.body.password,
              token: req.body.username + req.body.password,
            },
          });
        });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

UsersController.updateUsers = async function (req, res) {
  try {
    await model.users
      .findAll({ where: { id: req.body.id } })
      .then(async (result) => {
        if (result.length > 0) {
          await model.users.update(
            {
              username: req.body.username,
              password: req.body.password,
              token: req.body.username + req.body.password,
            },
            { where: { id: req.body.id } }
          );
          res.status(200).json({
            message: "Update successful.",
            data: {
              id: req.body.id,
              username: req.body.username,
              password: req.body.password,
              token: req.body.username + req.body.password,
            },
          });
        } else {
          res.status(500).json({ message: "Update failed" });
        }
      });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

UsersController.deleteUsers = async function (req, res) {
  try {
    await model.users
      .findAll({ where: { id: req.body.id } })
      .then(async (result) => {
        if (result.length > 0) {
          await model.users.destroy({ where: { id: req.body.id } });
          res.status(200).json({ message: "Delete user successfully." });
        } else {
          res.status(404).json({ message: "id user not found." });
        }
      });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = UsersController;
