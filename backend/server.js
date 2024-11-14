// server.js
import express from "express";
import userRoute from "./router/user.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoute);

const server = app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

export { app, server }; // Export app and server separately
