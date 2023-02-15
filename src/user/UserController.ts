import { Router } from "express";
import { deleteById, getAllUsers, getById, saveUser } from "./UserService";

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

userRouter.delete("/user/:id", (req, res) => {
  deleteById(req.params.id);
  res.send();
});

export { userRouter };
