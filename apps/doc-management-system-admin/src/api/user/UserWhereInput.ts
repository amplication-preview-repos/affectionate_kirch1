import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuditLogListRelationFilter } from "../auditLog/AuditLogListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  auditLogs?: AuditLogListRelationFilter;
  comments?: CommentListRelationFilter;
};
