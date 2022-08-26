const router = require("express").Router();
const { testSubmit, testLogin } = require("../controllers/userController");


// router.get("/login", (req, res) => {
// 	res.send({ key: "test" });
// });

// router.post("/login", testSubmit);
router.post("/login", testLogin);
module.exports = router;
