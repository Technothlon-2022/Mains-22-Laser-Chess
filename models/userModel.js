const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    roll: {
        type: String,
		required: true,
		unique: true,
    },
    pwd: {
        type: String,
		required: true,
    },
    createdAt: {
		type: Date,
		default: Date.now,
	},
});



module.exports.User = mongoose.model("user", userSchema);