const express = require("express");
const dotenv = require("dotenv");
const Router = require("./routes/routes.js");
dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/",Router);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})