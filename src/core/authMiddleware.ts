import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { users } from "../core/userStore";
import { IRequest } from "./../type";

export function authenticate(req: IRequest, res: Response, next: NextFunction) {
  const header: string = req.headers["authorization"];

  if (!header) {
    res.status(403).send({ error: "Access Denide " });
  } else {
    try {
      const [_, token] = header.split(" ");
      if (!verify(token, "secret")) {
        res.status(403).send({ error: "Access Denide " });
      }

      const payload: any = verify(token, "secret");

      console.log(payload);

      const user = users.find((u) => u.email === payload.email);

      if (!user) {
        res.status(404).send({ error: "User not found" });
      }

      req.user = { id: user.id, email: user.email };
      next();
    } catch (e: any) {
      res.status(404).send({ error: e.message });
    }
  }
}
