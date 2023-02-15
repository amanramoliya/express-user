import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
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
    email: email,
  };
}

export async function signInUser(signInData: authData) {
  const { email, password } = signInData;

  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("Invalid email ");
  }
  if (!(await compare(password, user.password))) {
    throw new Error("Invalid Password");
  }

  const accessToken = sign(password, "secret");
  console.log(accessToken);
  return accessToken;
}
