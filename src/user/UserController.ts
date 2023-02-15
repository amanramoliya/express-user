import { Router } from "express";
import { getAllUsers, getById, saveUser } from "./UserService";

const userRouter = Router();

userRouter.post("/user", (req, res) => {
  res.send(saveUser(req.body));
});

userRouter.get("/user", (req, res) => {
  res.send(getAllUsers());
});

userRouter.get("/user/:id", (req, res) => {
  res.send(getById(req.params.id));
});

export { userRouter };
