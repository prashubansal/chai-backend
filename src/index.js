// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from './db/index.js'

// import mongoose from "mongoose";
// import { DB_NAME } from './constants'

dotenv.config({
    path: './env'
})

connectDB()




/*
import express from 'express'
const app = express()
// ; -> use it before IIFE -> reason(JIC if the previous line doesn't have semicolon)
( async () => {
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error", (error) => {
            console.log("Our app not able to talk to the database");
            throw error
         })

         app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
         })

    } catch (error) {
        console.error('ERROR: ', error)
        throw error
    }
})()
*/