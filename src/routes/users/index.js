// User Router page
const express = require("express")
const passport = require("passport")
const router = express.Router()

router.get("/login", (req, res, next) => {
    return res.render("users/login")
})

// login route
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    // failureFlash: true,
}))

// new registration page
router.get("/register", (req, res) => {
    return res.render("users/register")
})

// create registration page
router.post("/register", (req, res) => {
    console.log("body", req.body)
    return res.send("you sucessfully register new user")
})

router.get("/logout", (req, res) => {
    // req.logOut()
    return res.redirect("/")
})

module.exports = router