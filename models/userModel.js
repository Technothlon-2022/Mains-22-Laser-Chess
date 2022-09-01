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
	room: {
		type: String,
		required: true,
	},
	color: {
		type: String,
	},
	score: {
		type: Number,
	},
	board: {
		type: String,
	},
	move: [{ type: String }],
	message: {
		type: String,
	},
	winner: {
		type: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports.User = mongoose.model("user", userSchema);
