const passport = require('passport');
//стратегия user/pass
const LocalStrategy = require('passport-local').Strategy;

//для SPA JWT strategy

//фекйовый аккаунт
const userDB = {
    id: 1,
    email: 'test@test.ru',
    password: '123'//npm install bcrypt
}

passport.serializeUser(function (user, done) {
    console.log('Serialized', user),
        done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log('DeSerialized', id);
    const user = (iserDB.id === id) ? userDB : false;
    // User.findById(id, function(err, user) {
    done(err, user);
    // });
});

passport.use(new LocalStrategy({ usernameField: 'email' },
    function (email, password, done) {
        if (email === userDB.email && password === userDB.password) {
            return done(null, userDB)
        } else {
            return done(null, false);
        }
    }));