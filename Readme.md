# chai aur backend series

This is a video series on backend with javascript
- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## How to connect database?
- setup a database online
- connect your database to your "env"
- go to .env
- and use the "env" -> PORT & MONGODB_URI
- go to constants.js and name your database and export that variable

**Step1:**- 

## File Upload

**1. Services and Packages**
- cloudinary
- multer

**2. Strategy**

Step1: user se file upload karwayenge using 'multer' and apne local server pe temporarily us file ko rakh denge

Step2: using cloudinary, we'll take file from local server and upload it on server 

**3. How to do it**

    > import v2 from 'cloudinary'
    > import fs from 'fs' 
    > put cloud_name, api_key, api_secret in '.env' file
    > cloudinary.config in cloudinary.js file
    > create a method and pass local file path as a parameter in that function and upload it
    > if successfully uploaded then unlink(delete) the file from file system(local server) 

**4. create a middleware (multer)**

- wherever I need file upload capabilities, we'll inject the multer there
- we are using DiskStorage to store the files.
-  

## RefreshToken and AccessToken

**AccessToken** - usually short lived(short term expiry) 

**RefreshToken** - usually long lived(long term expiry)

**Why**
- Till you have AccessToken, you can access the resources/feature, no need for authentication
- RefreshToken is saved in database and will be provided to the user.
- User is validated through AccessToken only. 
- But user do not need to enter password to get the new AccessToken everytime, if you have your RefreshToken then hit a specific end point, if the user's RefreshToken and DB's RefreshToken matches, it will give the user a new AccessToken.

## Join subscription model with user model (Left Join)

- Join means => subscription se jitni bhi info milti hai usko join kar do user ke andar

### Aggregation Pipelines

An aggregation pipeline consists of one or more stages that process documents:

Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

The documents that are output from a stage are passed to the next stage.

### Video:20

Task -> subscription se jitni bhi info milti hai usko join kardo users ke andar bhi



## Overview


## Assignments after completing series
Video24

## 
