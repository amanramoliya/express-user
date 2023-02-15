import * as express from "express";
import { userRouter } from "./user/UserController";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use(userRouter);

app.listen(5100, () => {
  console.log("Server started on port:5100");
});
