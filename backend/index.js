import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body {JSON}
app.use(express.json());

// Middleware to handle the cors policy
// Option 1 : Allo All origins with Default of cors (*)
app.use(cors());
// Option 2 : Allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Welcome route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to a mern stack app");
});

// middleware for handling routes
app.use("/books", booksRoute);

// Database connection and server connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
