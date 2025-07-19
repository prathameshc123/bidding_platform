import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    //product,baseprice,name, moblie,email,description
    product:{
        type:String,
        required:true
    },
    baseprice:{
        type:Number,
        required:true
    },
    name:{
        type:String,
       
        required:true
    },
    moblie:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
  
});

const Itemmodel = mongoose.model("item",itemSchema );

export default Itemmodel;