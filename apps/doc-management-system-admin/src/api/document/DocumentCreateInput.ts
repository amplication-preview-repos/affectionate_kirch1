import { InputJsonValue } from "../../types";
import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";
import { AuditLogCreateNestedManyWithoutDocumentsInput } from "./AuditLogCreateNestedManyWithoutDocumentsInput";
import { CommentCreateNestedManyWithoutDocumentsInput } from "./CommentCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  title?: string | null;
  description?: string | null;
  file?: InputJsonValue;
  folder?: FolderWhereUniqueInput | null;
  auditLogs?: AuditLogCreateNestedManyWithoutDocumentsInput;
  comments?: CommentCreateNestedManyWithoutDocumentsInput;
};
