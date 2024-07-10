import { InputJsonValue } from "../../types";
import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";
import { AuditLogUpdateManyWithoutDocumentsInput } from "./AuditLogUpdateManyWithoutDocumentsInput";
import { CommentUpdateManyWithoutDocumentsInput } from "./CommentUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  title?: string | null;
  description?: string | null;
  file?: InputJsonValue;
  folder?: FolderWhereUniqueInput | null;
  auditLogs?: AuditLogUpdateManyWithoutDocumentsInput;
  comments?: CommentUpdateManyWithoutDocumentsInput;
};
