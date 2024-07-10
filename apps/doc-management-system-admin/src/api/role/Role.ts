import { Permission } from "../permission/Permission";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  permissions?: Array<Permission>;
};
