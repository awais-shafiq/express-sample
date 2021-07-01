const router = require("express").Router();
const indexController = require("./../controllers/IndexController");

/**List */
router.get("/", (req, res) => {

	const { name, email, age, gender } = req.query;
	res.status(200).json({ message: `GET LIST ${name} ${email} ${age} ${gender}` });

});

/**Specific item */
router.get("/:id", (req, res) => {

	const { result, error } = indexController.getItem(Number(req.params.id));

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}

});

/**POST or create data */
router.post("/", (req, res) => {
	res.status(200).json({ message: "CREATE ITEM" });
});

/**Update data */
router.patch("/:id", (req, res) => {
	res.status(200).json({ message: "PATCH ITEM" });
});

/**Delete data */
router.delete("/:id", (req, res) => {
	res.status(200).json({ message: "DELETE ITEM" });
});

module.exports = router;