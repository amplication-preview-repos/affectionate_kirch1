import { Document } from "../document/Document";
import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  document?: Document | null;
  user?: User | null;
};
