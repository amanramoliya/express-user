import { Request } from "express";

export type JwtPayload = {
  id: string;
  email: string;
};

export interface IRequest extends Request {
  user: JwtPayload;
}
