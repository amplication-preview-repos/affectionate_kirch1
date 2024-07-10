import { JsonValue } from "type-fest";
import { AuditLog } from "../auditLog/AuditLog";
import { Comment } from "../comment/Comment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  auditLogs?: Array<AuditLog>;
  comments?: Array<Comment>;
};
