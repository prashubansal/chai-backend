//Notes
// Return kar denge 'promise' ke format mai

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// Notes
// now we have the async function
// jo humne pass kara hai usmai se hum extract kar lete hai "req, res, next" and pass them as parameter in async function
// try-catch => because jo bhi function mai lunga uspe async and try-catch ka wrapper laga rha hu

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }