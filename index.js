const express = require("express");
const connectDb = require("./config/connectDb");
const ContactRoutes = require("./routes/contacts");
require("dotenv").config();
const app = express();
app.use(express.json());
app.listen(process.env.port, (err) =>
  console.log(`server is up and running on port ${process.env.port}`)
);
// app.get("/", (req, res) => {
//   res.send("hello");
// });
connectDb();
app.use("/api/contact", ContactRoutes);
