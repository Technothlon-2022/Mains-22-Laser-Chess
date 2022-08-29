const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");

const MONGO_URI =
	process.env.MONGO_URI ||
	"mongodb+srv://technoUser:YLKHH2jNdicMSrJB@cluster3.3ahhuxr.mongodb.net/Techno_Database";
const client = new MongoClient(MONGO_URI);

const maxAge = 3 * 24 * 60 * 60;
const createToken = ({ roll, room }) => {
	return jwt.sign({ roll, room }, "secret", {
		expiresIn: maxAge,
	});
};

const testLogin = async function (req, res) {
	try {
		const roll = req.body.roll;
		const pwd = req.body.pwd;
		console.log(req.body);
		const userExist = await client
			.db("Techno_Database")
			.collection("users")
			.findOne({ roll: roll });

		if (userExist == null) throw new Error("User does not exist");
		if (userExist.pwd != pwd) throw new Error("Invalid Credentials");

		const token = createToken({ roll: userExist.roll, room: userExist.room });
		res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(201).json({ roll: userExist.roll, room: userExist.room, access: false });
	} catch (err) {
		console.error(err);
		res.status(400).json({ access: false, msg: err.message });
	}
};

module.exports = { testLogin };
