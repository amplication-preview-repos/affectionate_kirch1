import { DocumentUpdateManyWithoutFoldersInput } from "./DocumentUpdateManyWithoutFoldersInput";

export type FolderUpdateInput = {
  name?: string | null;
  parentFolder?: string | null;
  documents?: DocumentUpdateManyWithoutFoldersInput;
};
