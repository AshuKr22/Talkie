import generateTokenandSetCookie from "../../utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup= async (req,res)=>
{
    try{
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if(password!==confirmPassword)
    {
        return res.status(400).json({error:"Passwords do not match"});

    }
    const user = await User.findOne({username});
    if(user)
    {
        return res.status(400).json({error : "Username already exists"});
    }
    //HASH PASSOWORD HERE
    const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
    //Profile Pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    
    if(newUser)
    {
        //generated JWT token here.
        generateTokenandSetCookie(newUser._id,res)
        //if the new user is created successfully save it to DB
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    }
    else {
        res.status(400).json({ error: "Invalid user data" });
    }
}
    catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}



}

export const login=(req,res)=>
{
    console.log("login");

}
export const logout=(req,res)=>
{
    console.log("logout");
}
