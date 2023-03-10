const AnimalController = require("../controllers/animalController");
const router = require("express").Router();

router.get("/", AnimalController.getAllAnimal);
router.get("/:id", AnimalController.getAnimalById);
router.post("/", AnimalController.createAnimal);
router.put("/", AnimalController.updateAnimal);
router.delete("/", AnimalController.delelteAnimal);

module.exports = router;
