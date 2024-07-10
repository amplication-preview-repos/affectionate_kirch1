import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";
import { AuditLogListRelationFilter } from "../auditLog/AuditLogListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  file?: JsonFilter;
  folder?: FolderWhereUniqueInput;
  auditLogs?: AuditLogListRelationFilter;
  comments?: CommentListRelationFilter;
};
