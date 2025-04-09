enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  encryptedPassword: string;
  active: boolean;
  role: Roles;
};

export type { User, Roles };
