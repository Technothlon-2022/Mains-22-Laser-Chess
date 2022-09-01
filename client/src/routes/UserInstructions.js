import { Link, useNavigate } from "react-router-dom";

import "../styles/instructions.css"

import image_1 from "../assets/user/image 1.png";
import legend from "../assets/user/legend.png"
import geet from "../assets/user/GEET.png"


const UserInstructions = () => {
	const navigate = useNavigate();


	return (
		<div className="body200">
			<div className="div200">
				<div className="font200 typed200 margin200">Laser Chess</div>
				<div className="font1200 margin1200 border2200">
					<div className="margin3200">
						RULES AND REGULATION
						<hr />
					</div>
					<div className="padding200">
						<ul>
							<li>
								<p style={{ fontWeight: 700 }}> Introduction : </p>
								<p style={{ fontSize: 28 }}>
									A game of capture has never been this much fun! Laser Chess combines the fun of
									bending lasers and illuminating pieces with chess-like strategy. You have to
									strike your opponent’s King while protecting your own from getting zapped! Simple
									rules and only a few basic moves make Laser Chess easy to learn and quick to play
								</p>
							</li>
							<li>
								<p style={{ fontWeight: 700 }}> Objective : </p>
								<p style={{ textAlign: "center", fontSize: 28 }}>
									Be the first player to strike your opponent's King with a Laser.
								</p>
							</li>
							<li>
								<ol style={{ padding: 0 }}>
									<p style={{ fontWeight: 700 }}> No of Players :</p>
									<li
										style={{
											color: "red",
											padding: 5,
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										Red Player
									</li>
									<li
										style={{
											color: "blue",
											padding: 5,
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										Blue Player
									</li>
								</ol>
							</li>
							<li>
								<p style={{ fontWeight: 700 }}> Pieces :</p>
								<p style={{ fontSize: 28 }}>(Each player have 13 pieces)</p>
								<div className="div210">
									<img src={geet} style={{ borderRadius: 15, marginTop: 10 }} alt="" />
								</div>
								<ul>
									<li style={{ padding: 5, color: "black", marginLeft: "-10px" }}>
										<p style={{ margin: 0, fontSize: 40 }}> Laser </p>
										<p style={{ fontSize: 28 }}>
											Each player has one Laser that remains in the corner of the game board
											throughtout the game. The laser is not a playing piece and cannot be
											elliminated from play.
										</p>
									</li>
									<li style={{ padding: 5, color: "black", marginLeft: "-10px" }}>
										<p style={{ margin: 0, fontSize: 40 }}> Deflector </p>
										<p style={{ fontSize: 28 }}>
											The mirrored side of the Deflector reflects the laser 90 degrees. A Deflector
											is eliminated from play when any of it's non-mirrored surfaces are hit by the
											laser.
										</p>
									</li>
									<li style={{ padding: 5, color: "black", marginLeft: "-10px" }}>
										<p style={{ margin: 0, fontSize: 40 }}> Defender</p>
										<p style={{ fontSize: 28 }}>
											The front side of a Defender blocks the laser and the Defender will remain in
											play if hit from the front. A Defender is eliminated from play only if the
											laser strikes either of its sides or its back.
										</p>
									</li>
									<li style={{ padding: 5, color: "black", marginLeft: "-10px" }}>
										<p style={{ margin: 0, fontSize: 40 }}> Switch</p>
										<p style={{ fontSize: 28 }}>
											Both sides of the Switch reflect the laser 90 degrees. The Switch can also
											swap places with an adjacent Deflector or Defender (see Special Move section
											of Movement Rules). A switch can never be eliminated from play.{" "}
										</p>
									</li>
									<li style={{ padding: 5, color: "black", marginLeft: "-10px" }}>
										<p style={{ margin: 0, fontSize: 40 }}>King </p>
										<p style={{ fontSize: 28 }}>
											The King is the most important piece for each side. If hit with a laser, it is
											destroyed and its owner loses the game. Similar to a king in chess, the King
											pieces are comparatively weak, and so are often not moved unless under duress.
											All sides of the King are strikeable.{" "}
										</p>
									</li>
									<div className="div210">
										<img src={image_1} style={{ marginTop: 10, borderRadius: 15 }} alt="" />
									</div>
								</ul>
							</li>
							<li>
								<ol style={{ padding: 0, marginLeft: 10 }}>
									<p style={{ fontWeight: 700 }}>How to Play : </p>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										The Blue player goes first. Players take turns with each player moving only
										their own pieces. All playing pieces, including Kings can be moved (see Movement
										Rules). Note that Laser's are not movable pieces.{" "}
									</li>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										On a turn, a player must first take one of the following actions: A) Move any
										one piece one space in any direction (including diagonally) following the
										Movement Rules. B) Rotate a piece 90 degrees in either direction without the
										moving spaces. C) Rotate his or her own Laser to point in the direction of
										wither first column or first row. Rotation of the Laser must always be done
										before it is fired at the end of a turn.
									</li>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										To complete a turn, the player must activate his or her own laser. Pieces are
										removed from the board based on where the beam lands. Refer to Pieces for a
										description of when and how a piece is eliminated from play. If the laser beam
										lands on a player's own piece, the piece is still eliminated from play.{" "}
									</li>
									<p style={{ color: "red", fontSize: 40 }}>!! IMPORTANT !! </p>
									<p style={{ color: "red", padding: 5, fontSize: 28 }}>
										{" "}
										The laser is fired only one time at the end of a player's turn and the turn is
										over whether or not the laser hits a piece. A laser cannot be fired as a "test"
										mid-turn while a player is still deciding on a move to make. Once a move is made
										the move cannot be taken back and the Laser must be fired{" "}
									</p>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										Red pieces can never move into spaces with blue reserved patterns and Blue
										pieces can never move into squares containing red reserved patterns. (Located
										along the edges of the board){" "}
									</li>
								</ol>
							</li>
							<li>
								<p style={{ fontWeight: 700 }}> Winning Game : </p>
								<p style={{ color: "rgb(0, 0, 0)", padding: 0, fontSize: 28 }}>
									When either laser beam lands on a King piece, that King is removed and the game is
									over. If you are the player whose King remains–YOU WIN! If you accidentally hit
									your own King–LOSE! . Your opponent wins the game.
								</p>
							</li>
							<li>
								<ol style={{ padding: 0 }}>
									<p style={{ fontWeight: 700 }}>Movement Rules : </p>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										Piece may only be moved OR rotated in one turn, not both.{" "}
									</li>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										A piece may only be rotated 90 degrees at a time.
									</li>
									<li
										style={{
											padding: 5,
											color: "black",
											fontSize: 28,
											marginLeft: 10,
										}}
									>
										{" "}
										piece is captured when the laser hits a piece in one of it's non-deflective /
										non-shield side.{" "}
									</li>
								</ol>
							</li>
							<li style={{ padding: 0 }}>
								<ol style={{ padding: 0 }}>
									<p style={{ fontWeight: 700 }}> Special Move : </p>
									<ul style={{ padding: 0, color: "rgb(0, 0, 0)", fontSize: 28 }}>
										The special move is made only by a Switch piece. The Switch may swap places with
										an adjacent Deflector or Defender of either color. Neither piece rotates during
										the swap. A Switch cannot swap places with a King or another Switch piece.{" "}
									</ul>
								</ol>
							</li>
							<li>
								<p style={{ fontWeight: 700 }}> Actions :</p>
								<ul style={{ color: "rgb(0, 0, 0)", fontSize: 28 }}>
									<li style={{ marginLeft: "-15px" }}>
										Kill: Stop the laser beam and capture the piece.{" "}
									</li>
									<li style={{ marginLeft: "-15px" }}>
										Nothing: Stop the laser beam and do nothing (happens when the laser beam hits
										any other (or self) laser piece or the shield side of the Defender piece)
									</li>
									<li style={{ marginLeft: "-15px" }}>Top: Deflect the laser beam to the top. </li>
									<li style={{ marginLeft: "-15px" }}>
										Left: Deflect the laser beam to the left.{" "}
									</li>
									<li style={{ marginLeft: "-15px" }}>
										{" "}
										Right: Deflect the laser beam to the right.{" "}
									</li>
									<li style={{ marginLeft: "-15px" }}>
										Bottom: Deflect the laser beam to the bottom.{" "}
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="div210">
						<img src={legend} alt="" />
					</div>
					<button className="button200" onClick={() => navigate("/")}>Let's Play</button>
				</div>
			</div>
		</div>
	);
};
 
export default UserInstructions;