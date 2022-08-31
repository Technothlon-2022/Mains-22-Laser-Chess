require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { requireAuth } = require("./middlewares/userAuth.js");

const corsHandle = require("./middlewares/corsHandle.js");
const userRoutes = require("./routes/userRoutes.js");


const PORT = process.env.PORT || 5050;
const MONGO_URI =
	process.env.MONGO_URI ||
	"mongodb+srv://technoUser:YLKHH2jNdicMSrJB@cluster3.3ahhuxr.mongodb.net/Techno_Database";

const app = express();
const server = app.listen(PORT, console.log("server started at port: " + PORT));
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(corsHandle);
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());



mongoose
	.connect(MONGO_URI)
	.then(() => console.log("Successful DB connection"))
	.catch((err) => console.error("DB connection failed"));
const client = new MongoClient(MONGO_URI);

//******************Database connection***************//

// const { response } = require("express");
 const users = {};

io.on("connection",(socket)=>{
    socket.on('new-user-joined',async (roll) =>{
                console.log("New user: ",roll);
                // console.log("User Connected: "+ socket.id);
               users[socket.id]=roll;
                const room= await findOneListingByRoll(client,roll)
                console.log("Room: ",room);
                socket.join(room);
                roomSize=io.sockets.adapter.rooms.get(room).size
                console.log(room+":"+roomSize);
                io.to(room).emit('user-joined',roll);
                socket.on("message",(data)=>{
                    console.log(users[socket.id]+": "+data);
                    io.to(room).emit('message',data)
                    updateListingByRoom(client,room, {message:data});
                });
                socket.on("score",(data)=>{
                    console.log(data);
                    // io.to(room).emit('message',data)
                    updateListingByRoll(client,users[socket.id], {score:data});
                });
                socket.on("move",(data)=>{
                    console.log(data);
                    socket.to(room).emit('move',data)
                    updateListingByRoll(client,users[socket.id], {move:data});
                });
                socket.on("board",(data)=>{
                     console.log(data);
                    updateListingByRoom(client,room, {board:data});
                });
            });   
});
async function updateListingByRoom(client, roomName, updatedListing) {
    const result = await client.db("Techno_Database").collection("users").updateMany({ room:roomName }, { $set: updatedListing });
    // console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
async function updateListingByRoll(client, rollno, updatedListing) {
    const result = await client.db("Techno_Database").collection("users").updateOne({ roll:rollno }, { $set: updatedListing });
    // console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function findOneListingByRoll(client, roll) {
    const result = await client.db("Techno_Database").collection("users").findOne({ roll: roll })
    const response=result.room
    // console.log(response);
       if (result) {
        console.log(`Found a listing in the collection with the roll '${roll}':`);
        // console.log(result.room);
    } else {
        console.log(`No listings found with the roll '${roll}'`);
    }
    return response
    
}

//*******End of Database part ***********//

app.use("/api/user", userRoutes);

module.exports = app;
