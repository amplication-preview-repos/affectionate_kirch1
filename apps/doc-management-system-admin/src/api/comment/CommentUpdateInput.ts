import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  document?: DocumentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
