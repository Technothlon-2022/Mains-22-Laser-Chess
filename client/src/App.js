import { BrowserRouter, Route, Routes } from "react-router-dom"

import ChessMain from "./ChessMain";
import UserLogin from "./routes/UserLogin";
import UserInstructions from "./routes/UserInstructions";

const App = () => {
	return ( 
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<UserLogin />} />
				<Route path="/instructions" element={<UserInstructions />} />
				<Route path="/play" element={<ChessMain />} />
			</Routes>
		</BrowserRouter>
	 );
}
 
export default App;