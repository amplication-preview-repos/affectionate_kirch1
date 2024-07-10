import { DocumentCreateNestedManyWithoutFoldersInput } from "./DocumentCreateNestedManyWithoutFoldersInput";

export type FolderCreateInput = {
  name?: string | null;
  parentFolder?: string | null;
  documents?: DocumentCreateNestedManyWithoutFoldersInput;
};
