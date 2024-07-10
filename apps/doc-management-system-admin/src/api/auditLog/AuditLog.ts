import { User } from "../user/User";
import { Document } from "../document/Document";

export type AuditLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  action: string | null;
  timestamp: Date | null;
  user?: User | null;
  document?: Document | null;
};
