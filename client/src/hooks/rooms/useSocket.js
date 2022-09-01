import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5050");

const useSocket = ({ userDetails }) => {
	const [incomingMsg, setIncomingMsg] = useState("");
	const [outgoingMsg, setOutgoingMsg] = useState("");

	useEffect(() => {
		socket.on("connection");
		socket.emit("new-user-joined", userDetails.roll);
		socket.emit("user-joined", userDetails.roll);
		socket.on("move", setIncomingMsg)

		// socket.emit("message", outgoingMsg)
		return () => socket.off("connection");
	}, []);

	// useEffect(() => {
	//     setInterval(() => {
	//         socket.emit("message", "hi")
	//     }, 5000)
	// },[])

	// useEffect(() => {
	//     console.log(incomingMsg, userDetails.roll);
	// }, [incomingMsg])

	return [incomingMsg, setOutgoingMsg];
};

const sendMessage = (upd) => {
	socket.emit("move", upd);
};
const sendMove = (upd) => {
	socket.emit("move", upd);
};
const sendBoard = (upd) => {
	socket.emit("board", upd);
};
const sendScore = (upd) => {
	socket.emit("move", upd);
};

export default useSocket;
export { sendMessage, sendMove, sendBoard, sendScore };
