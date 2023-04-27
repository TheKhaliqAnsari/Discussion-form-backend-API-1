const verificationKey = process.env.x_api_key;

exports.verifyRequest = (req, res, next) => {
    const{ x_api_key} = req.headers;
    console.log(x_api_key)
    console.log(verificationKey)
    if(x_api_key && x_api_key === "Abracadabra"){
        next();
    }
    else{
        res.status(403).json({
            message: "Unautorized access :P"
        })
    }
}