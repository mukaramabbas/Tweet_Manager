const mongoose=require("mongoose");
exports.dbConnect=async()=>{
    try {
        // mongodb+srv://naveed_plomx:162qtLyLoXbEg7f9@cluster0.z6bfj7c.mongodb.net/Usermangement
            await mongoose.connect("mongodb://localhost:27017/userManagement");
            console.log("your database is connect");
    } catch (error) {
        console.error("Your mongodb is not Connected",error);
    }
}


