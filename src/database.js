import mongoose from "mongoose";

//const url = 'mongodb://localhost:27017/cafe-branch'; //Link de la base de datos local
const url = 'mongodb+srv://EnzoH292:Hipnos92@cluster0.u4tipnb.mongodb.net/cafe-branch-c6i';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})