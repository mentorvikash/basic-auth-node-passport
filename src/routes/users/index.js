// User Router page
const express = require("express")
const passport = require("passport")
const router = express.Router()

router.get("/login", (req, res, next) => {
    return res.send("login page")
})

// login route
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    failureFlash: true,
}))

// new registration page
router.get("/register", (req, res) => {
    return res.send("registration page")
})

// create registration page
router.post("/register", (req, res) => {
    return res.send("you sucessfully register new user")
})

router.get("/logout", (req, res) => {
    // req.logOut()
    return res.redirect("/")
})

module.exports = router