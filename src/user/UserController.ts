import { Router } from "express";
import { getAllUsers, saveUser } from "./UserService";

const userRouter = Router();

userRouter.post("/user", (req, res) => {
  res.send(saveUser(req.body));
});

userRouter.get("/users", (req, res) => {
  res.send(getAllUsers());
});

export { userRouter };
