
// async function updateListingBySelect(client, selectName, updatedListing) {
// 	const result = await client
// 		.db("Techno_Database")
// 		.collection("test")
// 		.updateOne({ select: selectName }, { $set: updatedListing });
// 	console.log(`${result.modifiedCount} document(s) was/were updated.`);
// }

// (socket) => {
// 	socket.on("new-user-joined", (roll) => {
// 		console.log("New user: ", roll);
// 		// console.log("User Connected: "+ socket.id);
// 		users[socket.id] = roll;
// 		socket.broadcast.emit("user-joined", roll);
// 	});

// 	socket.on("message", (data) => {
// 		console.log(users[socket.id] + ": " + data);
// 		socket.broadcast.emit("message", data);
// 		updateListingBySelect(client, "update", {
// 			message: data,
// 			name: socket.id,
// 			roll: users[socket.id],
// 		});
// 	});
// }