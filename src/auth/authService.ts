import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [];

type authData = {
  email: string;
  password: string;
};
export async function signUpUser(signUpData: authData) {
  const { email, password } = signUpData;
  const id = uuid();
  const hashedPasword = await hash(password, 10);

  users.push({
    id: id,
    email: signUpData.email,
    password: hashedPasword,
  });

  return {
    id: id,
    email: signUpData.email,
  };
}
