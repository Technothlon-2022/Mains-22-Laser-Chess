import { Link } from "react-router-dom";


const UserInstructions = () => {
    return ( 
        <div>
            Instructions:
            <button><Link to="/">Start Game</Link></button>
        </div>
     );
}
 
export default UserInstructions;