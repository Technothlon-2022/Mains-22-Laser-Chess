const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		if (!token) throw new Error("Please Login");
		const decodedToken = jwt.verify(token, "secret");
		res.locals.user = { ...decodedToken };
		next();
	} catch (err) {
		console.error(err);
		res.status(400).json({ access: false, msg: err.message });
	}
};

module.exports = { requireAuth };
