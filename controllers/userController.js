const { User } = require("../models/userModel");
const jwt=require('jsonwebtoken');


const testSubmit = async (req, res, next) => {
	try {
		const user = { roll: req.body.roll, pwd: req.body.pwd };
		const u = await User.create(user);
		console.log(req.body);

		const token=createToken(user._id);
		res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000});
		res.status(201).json({user:user._id})
		//res.status(200).send({ msg: "successful" });
	} catch (err) {
		console.error(err);
		res.status(400).json({ access: false, msg: err.message });
	}
};

const maxAge=3*24*60*60;
const createToken=({roll,room})=>{
	return jwt.sign({ roll,room},'secret',{	
		expiresIn:maxAge
	});
}
const {MongoClient}=require("mongodb");	
const MONGO_URI =
	process.env.MONGO_URI ||
	"mongodb+srv://technoUser:YLKHH2jNdicMSrJB@cluster3.3ahhuxr.mongodb.net/Techno_Database";
	const client=new MongoClient(MONGO_URI);

const testLogin = async function(req,res){
	try {
		const roll=req.body.roll;
		const pwd=req.body.pwd;

	 const userExist= await client.db("Techno_Database").collection("users").findOne({ "roll" : roll});
	 
	 if(userExist==null) throw new Error("User does not exist");
	//  else
	//  {
		const pass=userExist.pwd;
		if(pass!=pwd) 
		throw new Error("Invalid Credentials");
		const token=createToken({ roll:userExist.roll, room:userExist.room});
		res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000});
		res.status(201).json({roll:userExist.roll, room:userExist.room});
	//  }
	 
	 } 
	 catch (err) {
					console.error(err);
			res.status(400).json({ access: false, msg: err.message });
	}
	// const roll=req.body.roll;
	// const pwd=req.body.pwd;

	// const userExist= await client.db("Techno_Database").collection("test").findOne({ "roll" : roll});
	// if(userExist!=null)
	// {
	// const pass=userExist.pwd;
	// if(pass==pwd)
	// {
	// 	try {	
	// 		const token=createToken({ roll:userExist.roll, room:userExist.room});
	// 		res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge * 1000});
	// 		res.status(201).json({roll:userExist.roll, room:userExist.room});
	// 	} catch (err) {

	// 	}
	// }
	// else
	// res.send("Invalid credentials") ;
	// }
	// else
	// res.send("Invalid credentials") ;

}

module.exports = { testSubmit, testLogin };
