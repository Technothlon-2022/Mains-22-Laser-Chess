require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const corsHandle = require("./middlewares/corsHandle.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const PORT = process.env.PORT || 5050;
var server = require('http').createServer(app);
// var io = require('socket.io')(server);
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });
// server.listen(PORT,()=>{
//     console.log('Server is running ...');
// });

const MONGO_URI =
	process.env.MONGO_URI ||
	"mongodb+srv://technoUser:YLKHH2jNdicMSrJB@cluster3.3ahhuxr.mongodb.net/Techno_Database";

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

app.use("/api/user", userRoutes);

//******************Database connection***************//


const uri = "mongodb+srv://technoUser:YLKHH2jNdicMSrJB@cluster3.3ahhuxr.mongodb.net/Techno_Database";
// const { roll } = require('ejs');
 const users = {};
const client = new MongoClient(uri);

io.on("connection",(socket)=>{
    socket.on('new-user-joined',roll =>{
                console.log("New user: ",roll);
                // console.log("User Connected: "+ socket.id);
               users[socket.id]=roll;
                socket.broadcast.emit('user-joined',roll);
            });
            

    socket.on("message",(data)=>{
        console.log(users[socket.id]+": "+data);
        socket.broadcast.emit('message',data)
        updateListingBySelect(client, "update", {message:data,name:socket.id,roll:users[socket.id]});
    });
});
async function updateListingBySelect(client, selectName, updatedListing) {
    const result = await client.db("Techno_Database").collection("test").updateOne({ select: selectName }, { $set: updatedListing });
    // console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

//*******End of Database part ***********//

server.listen(PORT, console.log("server started at port: " + PORT));

module.exports = app;
