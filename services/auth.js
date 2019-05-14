import User from '../models/user';
import jwt from 'jsonwebtoken';
import configAuth from '../config/auth';

const generateToken = (id) => {
    const token = jwt.sign(
        {
            id,
            exp: Math.floor(Date.now() / 1000) + parseInt(configAuth.JWT.live)
        },
        configAuth.JWT.secret);

    return { token: 'bearer' + token }
};

export const login = async (payload) => {
    const { userName, password } = payload;

    try {
        const user = await User.findOne({ userName: userName });

        if (!user) return { meassage: 'No user found.' };

        if (!user.validPassword(password)) return { meassage: 'oops, wrong password' }

        return generateToken(user.userName);
    } catch (err) {
        console.error(error);
        return { success: false, meassage: 'Auth failed' }
    }
}

export const signup = async (payload) => {
    const { userName, password } = payload;

    try {
        const user = await User.findOne({ 'userName': userName });
        if (!user) return ({ message: 'is already taken' })

        const newUser = new User();
        newUser.userName = userName;
        newUser.password = newUser.generateHash(password);
    } catch { }
}