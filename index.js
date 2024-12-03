const express =require("express")
const app = express();
const dotenv= require("dotenv");
const bodyParser = require("body-parser");
const cors= require("cors")
const AuthRouter =require("./Routes/Authrouter")
const ProductRouter =require("./Routes/Products")
dotenv.config();
require("./Models/db")
app.get("/d",(req,res)=>{
    res.send("ram")
})
app.use(bodyParser.json())
app.use(cors())
const PORT =process.env.PORT
app.use('/auth', AuthRouter);
app.use('/', ProductRouter);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `)
})