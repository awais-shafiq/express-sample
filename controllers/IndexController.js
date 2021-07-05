const Item = require("./../models/item");

const listItems = async () => {

	try {
		// "SELECT * FROM item"
		const data = await Item.query();
		return { result: { status: 200, message: "Listing items", data: data } };

	} catch (error) {
		return { error: { status: 404, message: error.message, data: null } }

	}

}

const getItem = async (id) => {

	try {
		// `SELECT * FROM item WHERE id=${id}`
		// const data = await Item.query().where({id: id});
		const data = await Item.query().findOne({ id: id }).throwIfNotFound();
		return { result: { status: 200, message: "Listing items", data: data } };

	} catch (error) {
		// console.log(error);
		return { error: { status: 404, message: "Not found", data: null } }

	}

}

const createItem = async (name, quantity, unit_price) => {

	try {
		// "INSERT INTO item (name, quanitity, )"
		const data = await Item.query().insert({ name: name, quantity: quantity, unit_price: unit_price });

		return { result: { status: 201, message: "Item created", data: data } };

	} catch (error) {
		return { error: { status: 404, message: error.message, data: null } }

	}

}

const updateItem = async (id, name, quantity, unit_price) => {

	try {
		const data = await Item.query().patch({ name, quantity, unit_price }).where({ id: id });

		return { result: { status: 200, message: "Item created", data: data } };

	} catch (error) {
		return { error: { status: 404, message: error.message, data: null } }

	}

}

const deleteItem = async (id) => {
	try {
		const data = await Item.query().deleteById(id);

		return { result: { status: 200, message: "Item Deleted", data: data } };

	} catch (error) {
		return { error: { status: 404, message: error.message, data: null } }

	}
}

module.exports = { listItems, getItem, createItem, updateItem, deleteItem }