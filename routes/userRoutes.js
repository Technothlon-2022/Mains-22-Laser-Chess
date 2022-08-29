const router = require("express").Router();
const { testSubmit, testLogin } = require("../controllers/userController");
const { requireAuth } = require("../middlewares/userAuth");

router.get("/test", (req, res) => {
	res.send({ key: "test" });
});
router.get("/authorize", requireAuth, (req, res) => {
	res.status(201).json({ ...res.locals.user, access: true });
});
router.post("/login", testLogin);

module.exports = router;
