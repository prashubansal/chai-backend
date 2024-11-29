import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"

const app = express()

// "use" method is for middleware or configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// "static" -> to store public assets (file, folders and image) on local server
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// Function of cookieParser -> mai mere server se user ke browser ke andar ki cookies access kar paun or uski cookies set bhi kar paun. Basically perform cred operation on user's cookies.
app.use(cookieParser()) 


export { app }