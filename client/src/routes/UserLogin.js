import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
	const navigate = useNavigate();
	const rollRef = useRef();
	const pwdRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			const res = await axios.post(
				"http://localhost:5050/api/user/login", 
				{
					"roll": rollRef.current.value,
					"pwd": pwdRef.current.value
				}, 
				{
					withCredentials: true,
				});
			console.log(res.data.msg);
			navigate("/instructions");
			setLoading(false);
		} catch (err) {
			e.target.reset();
			console.error(err);
			setError(err.response ? err.response.data.msg : err.msg);
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<b>{error && "Error: " + error}</b>
				<input type="text" id="roll" name="roll" placeholder="roll no" ref={rollRef} required />
				<input type="text" id="pwd" name="pwd" placeholder="password" ref={pwdRef} required />
				<input type="submit" value="Submit" disabled={loading} />
			</form>
		</div>
	);
};

export default UserLogin;
