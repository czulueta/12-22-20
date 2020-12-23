const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.listen(9000, () => {
    console.log("successfully running on port 9000")
})