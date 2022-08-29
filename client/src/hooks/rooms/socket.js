import io from "socket.io-client";
import { useCallback } from "react";

const PORT = process.env.PORT || 5050;
const socket = io("http://localhost:5050");

const joinRoom = useCallback((roll) => {
    socket.on("connection");
    socket.emit("new-user-joined", roll);
}, [socket]);

// const 

// module.exports = {joinRoom, }