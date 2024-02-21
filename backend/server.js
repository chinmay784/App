const express = require("express");
const connectTOmongoDB = require("./db/connectDB");
const authroute = require("./routes/authRoute")

const app = express();
const port = 3000;

app.use(express.json())

app.get("/" , (req,res) =>{
    res.json("Hiii")
});


app.use("/api/auth",authroute)

app.listen(port ,() =>{
    connectTOmongoDB()
    console.log(`server is running in ${port}`);
})