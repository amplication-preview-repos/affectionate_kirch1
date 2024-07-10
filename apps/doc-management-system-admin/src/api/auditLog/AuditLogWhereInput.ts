import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AuditLogWhereInput = {
  id?: StringFilter;
  action?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  document?: DocumentWhereUniqueInput;
};
