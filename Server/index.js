const express =require("express")
const app =express()
const PORT=8000
const routes =require("./Routes/route.js")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")


app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/",routes)


mongoose.set('strictQuery',true);

 const mongoDB ="mongodb+srv://sandeepkadam1798sk:v5bmEhc3AtKRv7Bj@crud.hwnnj9y.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));





app.listen(PORT,(req,res)=>{
    console.log(`Server running on port no ${PORT}`)
})