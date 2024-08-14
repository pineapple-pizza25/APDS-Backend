import http from "http";
import express from "express"; 
import users from "./routes/user.mjs";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/user", users);
app.route("/user", users);

app.listen(PORT);