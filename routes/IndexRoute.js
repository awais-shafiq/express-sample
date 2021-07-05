const router = require("express").Router();
const indexController = require("./../controllers/IndexController");

/**List */
router.get("/", async (req, res) => {

	const { result, error } = await indexController.listItems();

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}

});

/**Specific item */
router.get("/:id", async (req, res) => {

	const { result, error } = await indexController.getItem(Number(req.params.id));

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}

});

/**POST or create data */
router.post("/", async (req, res) => {

	const { name, quantity, unit_price } = req.body;

	const { result, error } = await indexController.createItem(name, quantity, unit_price);

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}

});

/**Update data */
router.patch("/:id", async (req, res) => {

	const { name, quantity, unit_price } = req.body;

	const { result, error } = await indexController.updateItem(req.params.id, name, quantity, unit_price);

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json({data: result.data, message: result.message});
	} else {
		res.sendStatus(500);
	}

});

/**Delete data */
router.delete("/:id", async (req, res) => {
	const { result, error } = await indexController.deleteItem(req.params.id);

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json({data: result.data, message: result.message});
	} else {
		res.sendStatus(500);
	}
});

module.exports = router;