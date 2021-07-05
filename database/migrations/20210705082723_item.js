
exports.up = function (knex) {

	return knex.schema.createTable('item', (table) => {
		table.increments();
		table.string("name");
		table.integer("quantity");
		table.integer("unit_price");
	});

};

exports.down = function (knex) {

};
