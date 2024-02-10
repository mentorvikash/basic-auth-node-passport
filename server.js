const express = require("express");
const passport = require("passport");
const session = require("express-session")
const flash = require('connect-flash');
const LocalStrategy = require("passport-local").Strategy;
require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;


app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "myseceratekey", resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());
// set a public folder
app.use(express.static("/public"))
// set view engine
app.set("view engine", "ejs")
// will convert the received body to json
app.use(express.json())

// config our routes
const indexRoutes = require("./src/routes")
const userRoutes = require("./src/routes/users")
app.use("/", indexRoutes)
app.use("/users", userRoutes)

// set a possport for local use
passport.use(new LocalStrategy(
    (username, password, done) => {
        // For simplicity, we're using a static user object with a hardcoded username and password
        const user = { id: 1, username: 'user', password: 'welcome123' };

        if (username === user.username && password === user.password) {
            return done(null, user)
        } else {
            return done(null, false, { message: "Incorrect username or password" })
        }
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    const user = { id: 1, username: "user" }
    done(null, user)
})

app.listen(port, () => {
    console.log("server is running at " + port)
})

// next we have to install all requrired packages
// its time to check if server is running
// Next we going to check our routes working