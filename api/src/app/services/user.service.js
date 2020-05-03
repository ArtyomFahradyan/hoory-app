import mongoose from 'mongoose';
const User = mongoose.model('User');

export class UserService {

    constructor() { }
    static async getById(_id) {
        return await User.findOne({ _id }, { password: 0 });
    }

    static async getByEmail(email) {
        return await User.findOne({ email });
    }

    static async create(payload) {
        let user = new User({ ...payload });

        user.password = user.generatePassword(user.password);

        return await User.create(user);
    }

    static async update(_id, attributes) {
        const options = { new: true };

        return User.findOneAndUpdate({ _id }, attributes, options);
    }

    static async delete(_id) {
        return await User.findOneAndDelete({ _id });
    }

}
