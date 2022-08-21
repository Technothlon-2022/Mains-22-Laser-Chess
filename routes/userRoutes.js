const router = require("express").Router();
const { testSubmit } = require("../controllers/userController");

router.get("/test", (req, res) => {
	res.send({ key: "test" });
});

router.post("/formsubmit", testSubmit);

module.exports = router;
