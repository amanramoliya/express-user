import { Router } from "express";
import {} from "jsonwebtoken";
import { signUpUser } from "./authService";

const authRouter = Router();

authRouter.post("/auth/signup", async (req, res) => {
  const request = req.body;
  const response = await signUpUser(request);
  res.send(response);
});

export { authRouter };
