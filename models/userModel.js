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
		default: "blue",
	},
	score: {
		type: Number,
		default: 0
	},
	board: {
		type: String,
		default: "l++3d++kd++b+++2/2b7/3B+6/b++1B1ss+1b+++1B+/b+++1B+1S+S1b++1B/6b+++3/7B++2/2B+DKD3L",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
  move: [{type: String}],
  message: {
		type: String,
	},
});

module.exports.User = mongoose.model("user", userSchema);
