const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const userRoutes = require('./routes/userRoutes');

dotenv.config();
// database
database.connect();
//middlewares
app.use(
	express.urlencoded({ extended: true })
);
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: ['http://localhost:5173', '*', 'https://quiz-master-frontend-two.vercel.app'],
		credentials: true,
	})
);

// the routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/quiz", quizRoutes);
app.use("/api/v1/user", userRoutes);

app.get("/test-cookies", (req, res) => {
	console.log("Cookies:", req.cookies);
	res.send("Check your console for cookies");
});

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: 'Welcome to Quiz Master........'
	});
});


app.listen(PORT, () => {
	console.log(`Quiz Master is running on PORT ${PORT}`)
})