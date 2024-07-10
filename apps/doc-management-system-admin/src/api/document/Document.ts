import { JsonValue } from "type-fest";
import { Folder } from "../folder/Folder";
import { AuditLog } from "../auditLog/AuditLog";
import { Comment } from "../comment/Comment";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  file: JsonValue;
  folder?: Folder | null;
  auditLogs?: Array<AuditLog>;
  comments?: Array<Comment>;
};
