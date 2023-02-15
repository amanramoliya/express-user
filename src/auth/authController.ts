import { Router } from "express";
import {} from "jsonwebtoken";
import { signInUser, signUpUser } from "./authService";

const authRouter = Router();

authRouter.post("/auth/signup", async (req, res) => {
  const request = req.body;
  const response = await signUpUser(request);
  res.send(response);
});

authRouter.post("/auth/signin", async (req, res) => {
  const request = req.body;
  const response = await signInUser(request);
  res.send(response);
});
export { authRouter };
