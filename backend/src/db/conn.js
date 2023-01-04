const mongoose=require("mongoose");

// console.log(URI,"URI",mongoose)
    // connect method return promise help to fetch data
mongoose.set('strictQuery', true);
 mongoose.connect("mongodb://localhost:27017/",{
//    useNewUrlParser:true,
    useUnifiedTopology:true,
//    useCreateIndex:true        // avoid deprection warning
    
}).then( ()=>{
    console.log('connection succeesful ');
}).catch( (e)=>{
    console.log(e,"error");
 })