import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AuditLogUpdateInput = {
  action?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  document?: DocumentWhereUniqueInput | null;
};
