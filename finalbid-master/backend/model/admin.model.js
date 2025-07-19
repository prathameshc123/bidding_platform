import mongoose from "mongoose";

const adminregisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const AdminRegistermodel = mongoose.model("adminregister", adminregisterSchema);

export default AdminRegistermodel;
