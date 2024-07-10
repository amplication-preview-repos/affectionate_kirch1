import { InputJsonValue } from "../../types";
import { AuditLogUpdateManyWithoutUsersInput } from "./AuditLogUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  auditLogs?: AuditLogUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
};
