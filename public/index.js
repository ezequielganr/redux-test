const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mercadopago = require("mercadopago");

const app = express();

dotenv.config();

mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN,
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../client/build"));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});


app.post("/create_preference", (req, res) => {
	let payload = req.body.payload;

	let preference = {
		items: payload,
		back_urls: {
			"success": "http://localhost:3001/feedback",
			"failure": "http://localhost:3001/feedback",
			"pending": "http://localhost:3001/feedback"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			res.json({
				error
			});
		});
});

app.get('/feedback', function(req, res) {
	res.json({
		query: req.query
	});
});

app.listen(3001);
