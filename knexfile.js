module.exports = {

	development: {

		client: 'pg',
		connection: `postgres://postgres:postgres@localhost:5432/product`,
		// connection: {
		// 	host: process.env.POSTGRES_HOST,
		// 	user: process.env.POSTGRES_USERNAME,
		// 	password: process.env.POSTGRES_PASSWORD,
		// 	database: process.env.POSTGRES_DATABASE
		// },

		// connection: {
		// 	host: 'http://localhost:5432',
		// 	user: 'postgres',
		// 	password: 'postgres',
		// 	database: 'product'
		// },
		migrations: {
			directory: __dirname + '/database/migrations',
		},
		// seeds: {
		// 	directory: __dirname + '/database/seeds',
		// }

	},

	production: {

	}


}