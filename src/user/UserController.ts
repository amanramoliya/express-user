import { Router } from "express";
import { authenticate } from "../core/authMiddleware";
import { IRequest } from "./../type";
import { deleteById, getById } from "./UserService";

const userRouter = Router();

userRouter.use(authenticate);

userRouter.get("/user", (req: IRequest, res) => {
  res.send(getById(req.user.id));
});

userRouter.delete("/user", (req: IRequest, res) => {
  deleteById(req.params.id);
  res.send();
});

export { userRouter };
