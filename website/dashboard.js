const express = require("express");
const session = require("express-session");
const app = express();
const http = require("http").Server(app);
const passport = require("passport");
const { Strategy } = require("passport-discord");
const bodyparser = require("body-parser");
const path = require("path");

module.exports.load = async(client) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  let scopes = ["identify", "guilds"];

  passport.use(new Strategy({
    clientID: "747881797349671122",
    clientSecret: "htp2Khfp2tNLw528Kw3ncVp68qX7UmTw",
    callbackURL: `https://rhyno.xyz/login`,
    scope: scopes
  }, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
  }));

  http.port = process.env.PORT || 3000;
  http.client = client;

  app
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .engine("html", require("ejs").renderFile)
  .use(express.static(path.join(__dirname, "/public")))
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "views"))
  .use(session({
    secret: "ryhnosss32142141231231241241244",
    resave: false,
    saveUninitialized: false
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use("/", require("./router/index"))
  .use("/profile", require("./router/profile"))
  .use("/server", require("./router/support"))
  .use("/premium", require("./router/premium"))
  .use("/p", require("./router/user"))
  .use("/err", require("./router/err"))
  .use("/customize", require("./router/buybg"))
  .use("/guilds", require("./router/servers"))
    .use("/servers", require("./router/server"))
    .use("/invite", require("./router/invite"))
    .use("/short", require("./router/short"))


  .get("*", function(req, res) {
    res.redirect("/err/404");
  });

  http.listen(http.port, function(err) {
    if (err) throw err;
    console.log(`Dashboard is online at the port: ${http.port}`);
  });
  
  process.on("unhandledRejection", (r) => {
    console.dir(r);
  });  
};

