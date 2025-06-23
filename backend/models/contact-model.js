import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    from_name:{
        type:String
    },
    from_email:{
        type:String
    },
  
    message:{
        type:String
    },
});

const Contact=new mongoose.model("contact",contactSchema)

export default Contact;