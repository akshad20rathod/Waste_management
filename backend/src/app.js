                       // app.js is a file that we will going to run

const express = require("express"); // for configuring the express
const app =express();  // reference
require("./db/conn");     // has to include just like header files
const port = process.env.PORT || 3000;

app.get("/",(req,res)=> {res.send("hello from ak")
});

app.listen(port,()=>{
         console.log('server is running at port no port ');
})