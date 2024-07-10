import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  document?: DocumentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
