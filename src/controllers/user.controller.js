import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//Assignment
// console.log => req.files, req.body, existedUser
// read Array.some() function
// read User.findOne()

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty (if user sent proper data?)
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, check if avatar properly uploaded or not
    // create user object(because mongodb(Nosql db) takes object) - create entry in db
    // mongodb sends the created complete data in response as soon as the object is created in db 
    // remove password and refresh token field from response
    // check for user creation
    // return response to frontend

    const {fullName, username, email, password} = req.body
    // console.log("email: ", email);

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser){
        throw new ApiError(409, "User with email or username already exists")
    }

    // for checking Images/files saved by multer on loacl server 
    // we cannot use req.body
    // use req.files

    // console.log(req.files);
    
    const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path

    // checking if coverImage is given or not
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    // if coverImage is not there, cloudinary doesn't return error instead it will return an empty string.
    
    if(!avatar){
        throw new ApiError(400, "Avatar not uploaded on cloudinary")
    }

    // create a user object in db
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    //check if user is created or not in db from the response sent by the db and if created remove the password and refreshToken field from the object
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // return response to frontend
    return res.status(201).json(
        new ApiResponse(200, createdUser, "user registered successfully")
    )
    
})

export {registerUser}
