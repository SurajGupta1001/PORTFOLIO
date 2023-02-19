const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()

app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static("public"))

app.get("/",(req,res,next)=> {
    return res.render("index.ejs")
})

const port = process.env.PORT
console.log(port)
const startserver = async ()=> {
    app.listen(port, ()=> {
        console.log('server started http://localhost:3500')
    })
}
startserver()