const express = require("express");
const indexRoutes = require("./routes/IndexRoute");

const knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

const app = express();

const knexConnection = knex(knexConfig.development);

Model.knex(knexConnection);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/item", indexRoutes);

app.listen(4000, () => {
	console.log("App started on port", 4000);
});


/**
 * Step 2

const express = require("express");

const app = express();

//Route Methods
//GET, POST, PATCH, PUT, DELETE

app.get("/", (req, res) => {

	console.log("Hello World");

	res.status(200).json({message: "Success"});

});

app.post("/", (req, res) => {

	console.log("Hello World Post");

	res.status(200).json({message: "Success"});

});

app.listen(4000, () => {
	console.log("App started on port", 4000);
});

 */


/**
 * First Step
const express = require("express");

const app = express();

app.listen(4000, () => {
	console.log("App started on port", 4000);
});

*/
