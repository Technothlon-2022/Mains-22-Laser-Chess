import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";
import png122 from "../assets/user/122.png";

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
				"https://laserchess.techniche.org.in/api/user/login", 
				{
					"roll": rollRef.current.value,
					"pwd": pwdRef.current.value
				}, 
				{
					withCredentials: true,
				});
			console.log(res.data);
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
		<div className="bodymain100">
			<div className="main1100">
				<div className="font100  margin100">
					<img src={png122} className="image100" alt="" />
				</div>
				<div className="body100">
					<div className=" border2100">
						<div className="font1100  " style={{ marginTop: 10 }}>
							Laser Chess
							<hr className="margin5100" />
						</div>
						<div className="font4100">
							<div
								style={{
									fontSize: 20,
									color: "#dac105",
									marginTop: "-20px",
									marginBottom: 10,
								}}
							>
								{error && "Error: " + error}
							</div>
							<form onSubmit={handleSubmit}>
								<label htmlFor="roll">Roll No</label>
								<br />
								<input className="login-input100" type="text" name="roll" id="roll" ref={rollRef} required />
								<br />
								<label htmlFor="Pwd">Password</label>
								<br />
								<input className="login-input100" type="password" name="pwd" id="pwd" ref={pwdRef} required />
								<br />
								<input type="submit" className="button100" value="Login" disabled={loading} />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserLogin;
