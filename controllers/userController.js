const User = require("../models/userModel")

const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

const getUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({_id: id});
        res.json(user);
    } catch (error) {
        console.log(error)
    }
}

const createUser = async(req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const user = await new User({
            firstName: firstName,
            lastName: lastName,
            email: email
        });

        user.save()
            .then((result) => {
                console.log('User Created!');
                res.json(result);
            })
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
};


module.exports = {getUsers, getUser, createUser};