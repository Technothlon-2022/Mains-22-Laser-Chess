import { BrowserRouter, Rourtes, Route, Routes } from "react-router-dom"

import ChessMain from "./ChessMain";
import TestFormSubmit from "./components/TestFormSubmit";

const App = () => {
	return ( 
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TestFormSubmit />} />
				<Route path="/play" element={<ChessMain />} />
			</Routes>
		</BrowserRouter>
	 );
}
 
export default App;