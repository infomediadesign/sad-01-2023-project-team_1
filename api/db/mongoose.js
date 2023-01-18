// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;



mongoose.connect('mongodb://127.0.0.1:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
    }).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
     mongoose.set("useFindAndModify", false);
     mongoose.set('useCreateIndex', true);
});

// To prevent deprectation warnings (from MongoDB native driver)


module.exports = {
    mongoose
};
