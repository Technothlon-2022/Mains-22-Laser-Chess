import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { joinRoom } from "../hooks/rooms/socket";

const ProtectedRoute = () => {
	const location = useLocation();
	const [user, setUser] = useState();
	const [redirectPath, setRedirectPath] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5050/api/user/authorize/", {
				withCredentials: true,
			})
			.then((res) => setUser(res.data))
			.catch((err) => setRedirectPath("/login"));
	}, []);

	useEffect(() => {
		if (user) {
			localStorage.setItem("roll", user && user.roll);
			localStorage.setItem("room", user && user.room);
			console.log("hi");
			// joinRoom(user.roll);
		}
	}, [user]);

	if (user) return <Outlet context={{ user }} />;
	if (redirectPath) return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
