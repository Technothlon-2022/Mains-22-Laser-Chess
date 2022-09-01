import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const [userDetails, setUserDetails] = useState();
	const [redirectPath, setRedirectPath] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5050/api/user/authorize/", {
				withCredentials: true,
			})
			.then((res) => setUserDetails(res.data))
			.catch((err) => setRedirectPath("/login"));
	}, []);

	useEffect(() => {
		if (userDetails) {
			localStorage.setItem("roll", userDetails.roll);
			localStorage.setItem("room", userDetails.room);
			localStorage.setItem("color", userDetails.color);
			localStorage.setItem("score", userDetails.score);
			localStorage.setItem("board", userDetails.board);
		}
	}, [userDetails]);

	if (userDetails) return <Outlet context={{ userDetails }} />;
	if (redirectPath) return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
