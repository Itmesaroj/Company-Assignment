const express=require("express");
const app=express();
require('dotenv').config();
const cors = require('cors');
const authRoute=require("./routes/authRouter")
const rideRoute=require("./routes/rideRoutes")
app.use(cors());
app.use(express.json());

app.use('/api', authRoute);
app.use("/api",rideRoute);
PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("server started")
})