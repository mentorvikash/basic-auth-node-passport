const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    // here we are planning to use ejs to create our view
    // so user can login from UI
    res.send("welcome to home page")
})


router.get("/login", (req, res) => {
    // here we are planning to use ejs to create our view
    // so user can login from UI
    res.render("index")
})

router.post("/login", (req, res) => {
    console.log("body", req.body)
    res.redirect("/login")
})

// DASHBOARD
// After successfull login user can visit to dashboard page
router.get("/dashboard", (req, res) => {
    res.render("/dashboard/index")
})




module.exports = router