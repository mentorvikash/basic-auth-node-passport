const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    // here we are planning to use ejs to create our view
    // so user can login from UI
    res.render("home/index")
})

module.exports = router