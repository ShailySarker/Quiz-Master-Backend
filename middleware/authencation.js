const jwt = require("jsonwebtoken");

//################  auth ########################
exports.auth = async (req, res, next) => {
    try {
        // Extract token 
        const token =
            req.cookies.token ||
            req.body.token ||
            req?.header("Authorization").replace("Bearer ", "");

        // if token is missing return response.
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is Missing"
            })
        }

        // find out values from the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;

        } catch (error) {
            console.log(error);
            return res.status(401).json({
                success: false,
                message: "Token is invalid!"
            })
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Token Verification is failed!"
        })
    }
}



// ######################## isAdmin #######################
exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.accountType !== 'Admin') {
            return res.status(401).json({
                success: false,
                message: "This is protected Route for the Admin"
            })
        }
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User Role Can not be verified please try again!"
        })
    }
}

