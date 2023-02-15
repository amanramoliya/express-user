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

export function getAllUsers() {
  const result = users.map((user) => {
    return { id: user.id, email: user.email };
  });
  return result;
}

export function getById(id: string) {
  const resultUser = users.filter((u) => u.id == id);

  return resultUser.length !== 0
    ? {
        id: resultUser[0].id,
        email: resultUser[0].email,
      }
    : { msg: "User Not Found" };
}
