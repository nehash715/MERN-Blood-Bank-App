const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path=require("path")
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/test", require("./routes/testRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/inventory", require("./routes/inventoryRoutes"));
app.use("/analytics", require("./routes/analyticsRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 8080;
/*--deployment---*/
const __dirname1 = path.resolve();

if (process.env.DEV_MODE === "development") {
  
  app.use(express.static(path.join(__dirname, './client/build')));

// Your other routes and middleware

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

/*--- deployment--*/
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
