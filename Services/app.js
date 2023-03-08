require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { createServer } = require("http");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "UPDATE", "PATCH"],
  credential: true,
};

// ==== Middleware ====
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// ==== Router ====
const UsersRouter = require("./routes/Users.Route");

app.use("/user", UsersRouter);

const httpServer = createServer(app);
httpServer.listen(process.env.PORT, () => {
  console.log(`App started at port ${process.env.PORT}`);
});
