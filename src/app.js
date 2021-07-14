const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require("jsonwebtoken");
dotenv.config()

const app = express();
const { isAuthentications } = require("./middleware/app");


app.use(cors());

app.use(express.json())
//app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 4001

const server = app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`)
})

const authData = isAuthentications


app.use("/user",authData, require("./routes/user/app"))
app.use("/supplier", authData, require("./routes/supplier/app"))
app.use("/customer", authData, require("./routes/customer/app"))
app.use("/product", authData,require("./routes/product/app"))
app.use("/login", require("./routes/login/app"))
app.use("/delivery",authData, require("./routes/delivery/app"))
app.use("/deliveryTrans",authData, require("./routes/delivery_Trans/app"))
app.use("/transPayment",authData, require("./routes/transpayment/app"))
app.use("/order", authData,require("./routes/order/app"))

app.use(async (req, res) => {
    res.status(404).send(`ROUTES IS NO WHERE TO FOUND. `)
})

module.exports = app