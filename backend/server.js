// const express = require("express");
// const app = express();
// require("dotenv").config();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const port = process.env.PORT;
// const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.get("/", (req, res) => {
//     res.render("Bonjour MonShop")
// })

// app.post("/pay", async(req, res) => {
//     console.log(req.body.token);
//     await Stripe.charges.create({
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency: "eur",
//     })
// })

// app.listen(port, () => {
//     console.log(`Server is running on Port ${port}`);
// })