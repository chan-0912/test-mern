const mongoose  = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true,"email required"],
        unique: true,
    },
    username:{
        type: String,
        required: [true, "username required"],
        unique:true,
    },
    password:{
        type: String,
        required: [true, "password required"],
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },

});

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User",userSchema);