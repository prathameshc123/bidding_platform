import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from 'cookie-parser';
import Itemmodel from "./model/item.model.js";

import jwt from "jsonwebtoken";
import Registermodel from "./model/register.model.js"
import AdminRegistermodel from "./model/admin.model.js";
const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


mongoose.connect('mongodb+srv://e&w=majority&appName=Cluster0'

);
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    Registermodel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                
                const token=jwt.sign({
                    name:req.body.name,
                    email:req.body.email
                },'abc123')
                res.json({status:'ok', user:token});
                
            }
            else{
                res.json("wrong password");
            }
        }
        else{
            res.json("please register first");
        }
    })
})
app.post("/admin_register",(req,res)=>{
AdminRegistermodel.create(req.body)
.then(registers => res.json(registers))
.catch(err=>res.json(err))

})
app.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const { name, baseprice, email } = req.body;
  
    try {
      const updatedItem = await Itemmodel.findByIdAndUpdate(
        id,
        { name, baseprice, email },
        { new: true }
      );
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(updatedItem);
    } catch (err) {
      console.error("Error updating product:", err);
      res.status(500).json({ message: 'Server error while updating product' });
    }
  });
app.post("/registerproduct", (req, res) => {
  Itemmodel.create(req.body)
    .then(registers => res.json(registers))
    .catch(err => res.json(err));
});
app.get("/product",(req,res)=>{
    Itemmodel.find()
    .then(user=>{res.send(user)})
    .catch(err=>{res.json(err)})
})
app.get("/adminproduct",(req,res)=>{
    Itemmodel.find()
    .then(user=>{res.send(user)})
    .catch(err=>{res.json(err)})
})
app.post("/register",(req,res)=>{
    Registermodel.create(req.body)
    .then(registers => res.json(registers))
    .catch(err=>res.json(err))
})
app.post("/admin_login",(req,res)=>{
    const {email,password}=req.body;
    AdminRegistermodel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("success");
                
            }
            else{
                res.json("wrong password");
            }
        }
        else{
            res.json("please register first");
        }
    })
})
app.post("/home",(req,res)=>{
    let data=jwt.verify(req.cookies.token,"secart")
    return res.send(data)

})
app.delete('/adminproduct/:id', async (req, res) => {
    try {
      const result = await Itemmodel.findByIdAndDelete(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json({ message: "Item deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
app.listen(3000,()=>{
    console.log("server is connected")
})
