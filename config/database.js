const mongoose = require("mongoose");

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(() => {console.log("QuizMasterDB connected successfully")})
    .catch( (err) => {
        console.log("QuizMasterDB is not connected!");
        console.error(err);
        process.exit(1);
    } );
}