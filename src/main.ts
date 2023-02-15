import * as express from "express";
import { authRouter } from "./auth/authController";
import { userRouter } from "./user/UserController";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.body);
  next();
});
app.use(authRouter);
app.use(userRouter);

app.listen(5100, () => {
  console.log("Server started on port:5100");
});
