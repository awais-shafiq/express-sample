const listItems = () => {



}

const getItem = (id) => {

	if (id === 2) {
		return { result: { status: 200, message: "Record found", data: { id: 2, item_name: "Apple" } } }
	} else {
		return { error: { status: 404, message: "Record not found", data: null } }
	}

}

const createItem = (name, category, price) => {



}

const updateItem = (id, name, category, price) => {



}

const deleteItem = (id) => {

}

module.exports = { listItems, getItem, createItem, updateItem, deleteItem }