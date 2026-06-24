const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");


// Middleware

app.use(express.json());

app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});


app.listen(4000, () => {

  console.log("Server Running on Port 4000");
  console.log("http://localhost:4000");

});