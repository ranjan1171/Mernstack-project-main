import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://RANJAN:RANJAN3559@cluster0.sl6r5.mongodb.net/RJRESTURENT?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}


