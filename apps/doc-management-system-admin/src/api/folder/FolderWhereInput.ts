import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";

export type FolderWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  parentFolder?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
};
