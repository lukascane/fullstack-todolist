const User = require("./model/ToDoRegister");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
function JWTConfig(passport) {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: (req) => {
          return req.cookies["valueofTOKEN"];
        }, // we tell JWTStrategy where to find the token
        secretOrKey: process.env.TOKEN_KEY,
      },
      (jwtPayload, done) => {
        return (
          User.findById(jwtPayload.sub)
            // performance improvement, not necessary
            .select("_id username email")
            .then((user) => {
              return done(null, user);
            })
            .catch((err) => {
              return done(err);
            })
        );
      }
    )
  );
}
module.exports = JWTConfig;