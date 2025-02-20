const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");

dotenv.config();
database.connect();

app.use(express.json());

app.listen(PORT, () => {
	console.log(`Quiz Master is running on PORT ${PORT}`)
})