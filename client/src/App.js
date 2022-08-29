import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChessMain from "./ChessMain";
import UserLogin from "./routes/UserLogin";
import UserInstructions from "./routes/UserInstructions";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<UserLogin />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/instructions" element={<UserInstructions />} />
					<Route path="/" element={<ChessMain />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
