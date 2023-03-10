const model = require("../models/Model");
const { Op } = require("sequelize");
const UsersController = {};

UsersController.getAllUsers = async function (req, res) {
  try {
    const userData = await model.Users.findAll();
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
    const userData = await model.Users.findOne({
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
    const checkData = await model.Users.findAll({
      where: {
        [Op.or]: {
          username: req.body.username,
          password: req.body.password,
          userType: req.body.userType,
        },
      },
    });
    if (checkData.length > 0) {
      res
        .status(500)
        .json({ message: "Username/password has already in use." });
    } else {
      await model.Users.create({
        username: req.body.username,
        password: req.body.password,
        userType: req.body.userType,
        token: req.body.username + req.body.password,
      }).then((result) => {
        res.status(201).json({
          message: "user successful created",
          data: {
            username: req.body.username,
            password: req.body.password,
            userType: req.body.userType,
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
    await model.Users.findAll({ where: { id: req.body.id } }).then(
      async (result) => {
        if (result.length > 0) {
          await model.Users.update(
            {
              username: req.body.username,
              password: req.body.password,
              userType: req.body.userType,
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
              userType: req.body.userType,
              token: req.body.username + req.body.password,
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

UsersController.deleteUsers = async function (req, res) {
  try {
    await model.Users.findAll({ where: { id: req.body.id } }).then(
      async (result) => {
        if (result.length > 0) {
          await model.Users.destroy({ where: { id: req.body.id } });
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

module.exports = UsersController;
