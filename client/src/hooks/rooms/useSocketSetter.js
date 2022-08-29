import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

const PORT = process.env.PORT || 5050;
const socket = io("http://localhost:5050");

const useSocketSetter = () => {
	const [jwtCookie, setJwtCookie, removeJwtCookie] = useCookies(["techno_jwt"]);

	useEffect(() => {
		socket.on("connection");

		socket.emit("new-user-joined", jwtCookie.roll || "JE5678999");

        socket.on('message',(data)=>{
            document.querySelector('h2').innerHTML=data
        })
	}, [jwtCookie]);
};

export default useSocketSetter;
