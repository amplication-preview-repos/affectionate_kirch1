import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  description?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
};
