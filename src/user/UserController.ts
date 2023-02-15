import { Router } from "express";
import { saveUser } from "./UserService";

const userRouter = Router();

userRouter.post("/user", (req, res) => {
  res.send(saveUser(req.body));
});

export { userRouter };
