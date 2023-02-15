import { v4 as uuid } from "uuid";

type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [];
export function saveUser(userData: { email: string; password: string }) {
  const id = uuid();

  users.push({
    id: id,
    email: userData.email,
    password: userData.password,
  });

  return {
    id: id,
    email: userData.email,
  };
}
