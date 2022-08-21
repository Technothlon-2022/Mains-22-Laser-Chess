const { User } = require("../models/userModel");

const testSubmit = async (req, res, next) => {
	try {
		const user = { roll: req.body.roll, pwd: req.body.pwd };
		const u = await User.create(user);
		console.log(req.body);

		res.status(200).send({ msg: "successful" });
	} catch (err) {
		console.error(err);
		res.status(400).json({ access: false, msg: err.message });
	}
};

module.exports = { testSubmit };
