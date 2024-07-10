import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
};
