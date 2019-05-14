import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../../models/user';
import configAuth from '../auth';

const opts = {
    jwtFromRequset: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configAuth.JWT.secret
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ userNmae: jwt_payload.userName })

        if (user) {
            return done(null, user)
        }

        return done(null, user);
    } catch (err) {
        done(error, fasle)
    }
}));