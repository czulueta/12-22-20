const express = require("express")
const carRouter = express.Router()
const { v4:uuidv4 } = require("uuid")

const cars = [
    {make:"Honda", model:"accord", _id:uuidv4()},
    {make:"Acura", model:"rlx", _id:uuidv4()},
    {make:"BMW", model:"3 series", _id:uuidv4()},
    {make:"Rolls Royce", model:"phantom", _id:uuidv4()}
]

carRouter.route("/")
    .get((req, res) => {
        res.send(cars)
    })
    .post((req,res) => {
        const newCar = req.body
        newCar._id = uuidv4()
        cars.push(newCar)
        res.send(newCar)
    })

module.exports = carRouter