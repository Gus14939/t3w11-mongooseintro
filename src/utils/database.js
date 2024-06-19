const { default: mongoose } = require("mongoose");

async function connect(){
    let databaseURL = process.envDATABASE_URL || "mongodb://localhost:27017/testDBDB";

    await mongoose.connect(databaseURL)
}

module.exports = {
    connect
}