const app = require("express");
const router = app.Router();

router.post("/", (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please Enter All Required Fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ errorMessage: "Please Put 6 or more characters on Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
