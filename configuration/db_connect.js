const mongoose = require('mongoose');
async function dbConnect() {
    try {
        const URL='mongodb+srv://srijansamanta1412:6291894552@cluster0.pc2mfsr.mongodb.net/'
        await mongoose.connect(URL)
        console.log("Connect To Database Succefully")
    }
    catch(e){
        console.log(e);
        console.log("Couldn't connect to Database");
    }
}

module.exports = dbConnect;